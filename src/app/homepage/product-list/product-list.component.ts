import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Product } from 'src/app/shared/productservice/product.model';
import { ProductService } from 'src/app/shared/productservice/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {

  data:Array<any> | undefined
  totalRecords:number=0;
  page:number=1
  listArray:any[] = []
  constructor(public _productService: ProductService) { }
 
  ngOnInit(): void {
    this.productList();
    this.display();
  }
  productList(){
    this._productService.getProList().subscribe((res)=>{
      this._productService.products=res as Product[];
      this.totalRecords=this._productService.products.length;
    });
  }

  display(){
    return localStorage.getItem("email");
  }

  addToCart(product:Product){
    this.listArray.push(product);
    console.log(this.listArray);
    localStorage.setItem('cart', JSON.stringify(this.listArray)||"[]");
  }
}
