import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/productservice/product.model';
import { ProductService } from '../shared/productservice/product.service';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrls: ['./filterpage.component.css'],
  providers:[ProductService]
})
export class FilterpageComponent implements OnInit {
  data:Array<any> | undefined
  totalRecords:number=0;
  page:number=1
  listArray:any[] = []
  constructor(public _productService: ProductService, private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getParaID();
  }

  getParaID(){
    this.route.params.subscribe(params => {
      this.paramsChange(params.id);
  });
  }

  paramsChange(id:string){
    this._productService.getProListByType(String(id)).subscribe((res)=>{
      this._productService.products=res as Product[];
      this.totalRecords=this._productService.products.length;
    });
  }

  addToCart(product:Product){
    this.listArray.push(product);
    console.log(this.listArray);
    localStorage.setItem('cart', JSON.stringify(this.listArray)||"[]");
  }
}
