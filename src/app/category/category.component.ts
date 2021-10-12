import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryType } from '../shared/categoryservice/category.model';
import { CategoryService } from '../shared/categoryservice/category.service';
declare var M:any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(public _categoryTypeService: CategoryService) { }

  ngOnInit(): void {
    this.resetForm();
    this.cateTypeList();
  }

  onSubmit(form: NgForm){
    if(form.value._id==""){
      this._categoryTypeService.postCateTypegory(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.cateTypeList();
        M.toast({html:'Save Successfully',class:'rounded'});
      });
    }
    else{
      this._categoryTypeService.putCateType(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.cateTypeList();
        M.toast({html:'Edit Successfully',class:'rounded'});
      });
    }
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
    }
    this._categoryTypeService.selectedCategoryType={
      _id:"",
      name:"",
    }
  }

  cateTypeList(){
    this._categoryTypeService.getCateTypeList().subscribe((res)=>{
      this._categoryTypeService.categoryType=res as CategoryType[];
    });
  }

  onEdit(cateType:CategoryType){
    this._categoryTypeService.selectedCategoryType=cateType;
  }

  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to delete')==true){
      this._categoryTypeService.deleteCateType(_id).subscribe((res)=>{
        this.cateTypeList();
        this.resetForm(form);
        M.toast({html:'Delete Successfully',class:'rounded'})
      })
    }
  }

}
