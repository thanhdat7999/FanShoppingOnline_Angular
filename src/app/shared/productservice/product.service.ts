import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct!: Product;
  products: Product[] = [];
  readonly baseURL='http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  postProduct(pro:Product){
    return this.http.post(this.baseURL, pro);
  }

  getProList(){
    return this.http.get(this.baseURL);
  }

  getProDetail(_id:string){
    return this.http.get(this.baseURL + `/${_id}`);
  }

  getProListByType(_cateID:string){
    return this.http.get(this.baseURL + '/filterbytype' + `/${_cateID}`);
  }

  putProduct(pro: Product){
    return this.http.put(this.baseURL + `/${pro._id}`,pro);
  }

  deleteProduct(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
