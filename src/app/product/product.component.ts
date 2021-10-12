import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryType } from '../shared/categoryservice/category.model';
import { CategoryService } from '../shared/categoryservice/category.service';
import { Product } from '../shared/productservice/product.model';
import { ProductService } from '../shared/productservice/product.service';
declare var M:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService, CategoryService]
})
export class ProductComponent implements OnInit {
  selectedFile:string="";
  file!: File;
  constructor(public _productService: ProductService, public _categoryTypeService: CategoryService) { }

  ngOnInit(): void {
    this.cateTypeList();
    this.resetForm();
    this.refreshEmployeeList();
  }
  refreshEmployeeList() {
    this._productService.getProList().subscribe((res) => {
      this._productService.products = res as Product[];
    });
  }
  onImageChange(event: any) {
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);
  }
  onSubmit(form: NgForm){
    var filename = form.value.image.replace(/^.*\\/, "");
    console.log(filename);
    form.value.image=filename;
    if(form.value._id=="" || form.value._id==null){
      this._productService.postProduct(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.productList();
        M.toast({html:'Save Successfully',class:'rounded'});
      });
    }
    else{
      this._productService.putProduct(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.productList();
        M.toast({html:'Edit Successfully',class:'rounded'});
      });
    }
  }

  resetForm(form?:NgForm){
   
    if(form){
      form.reset();
    }
    this._productService.selectedProduct={
      _id:"",
      name:"",
      price:0,
      description:"",
      cateid: "",
      image:""
    }
  }

  productList(){
    this._productService.getProList().subscribe((res)=>{
      this._productService.products=res as Product[];
    });
  }
  cateTypeList(){
    this._categoryTypeService.getCateTypeList().subscribe((res)=>{
      this._categoryTypeService.categoryType=res as CategoryType[];
    });
  }
  onEdit(pro:Product){
    this._productService.selectedProduct=pro;
  }

  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to delete')==true){
      this._productService.deleteProduct(_id).subscribe((res)=>{
        this.productList();
        this.resetForm(form);
        M.toast({html:'Delete Successfully',class:'rounded'})
      })
    }
  }
}
