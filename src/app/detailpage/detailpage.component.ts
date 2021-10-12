import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/productservice/product.model';
import { ProductService } from '../shared/productservice/product.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  name:string=""
  description:string=""
  image:string=""

  product!: Product;
  constructor(public _productService: ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsChange()
  }

  paramsChange(){
    const productID=this.route.snapshot.paramMap.get('id');
    this._productService.getProDetail(String(productID)).subscribe((res)=>{
      this.product=res as Product;
      this.name=this.product.name;
      this.description=this.product.description;
      this.image=this.product.image;
      // console.log(res);
      // this._productService.products=res as Product[];
    });
  }
}
