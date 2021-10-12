import { Component, OnInit } from '@angular/core';
import { CategoryType } from '../shared/categoryservice/category.model';
import { CategoryService } from '../shared/categoryservice/category.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[CategoryService]
})
export class HomepageComponent implements OnInit {
  cateid:string="";
  constructor(public _categoryTypeService: CategoryService) { }

  ngOnInit(): void {
    this.cateTypeList();
  }
  cateTypeList(){
    this._categoryTypeService.getCateTypeList().subscribe((res)=>{
      this._categoryTypeService.categoryType=res as CategoryType[];
    });
  }
  onSave(cateid:string){
    this.cateid=cateid;
  }

}
