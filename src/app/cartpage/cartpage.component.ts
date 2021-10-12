import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/productservice/product.model';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  products:Product[]=[]
  constructor() { }

  ngOnInit(): void {
    var x = JSON.parse(localStorage.getItem("cart")||'[]');
    this.products=x;
    console.log(x.length);
  }

}
