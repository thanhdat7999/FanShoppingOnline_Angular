import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryType } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selectedCategoryType!: CategoryType;
  categoryType: CategoryType[] = [];
  readonly baseURL='http://localhost:3000/cateTypes';
  constructor(private http: HttpClient) { }
  postCateTypegory(cate:CategoryType){
    return this.http.post(this.baseURL, cate);
  }

  getCateTypeList(){
    return this.http.get(this.baseURL);
  }

  putCateType(cate: CategoryType){
    return this.http.put(this.baseURL + `/${cate._id}`,cate);
  }

  deleteCateType(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
