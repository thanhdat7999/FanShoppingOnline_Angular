import { Component, OnInit } from '@angular/core';
import { CategoryType } from 'src/app/shared/categoryservice/category.model';
import { CategoryService } from 'src/app/shared/categoryservice/category.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers:[CategoryService]
})
export class SideBarComponent implements OnInit {
  message:string="";
  mess:string="aaaaa";
  constructor(public _categoryTypeService: CategoryService) { }

  ngOnInit(): void {
    console.log(this.message);
    this.cateTypeList();
  }
  cateTypeList(){
    this._categoryTypeService.getCateTypeList().subscribe((res)=>{
      this._categoryTypeService.categoryType=res as CategoryType[];
    });
  }
}
