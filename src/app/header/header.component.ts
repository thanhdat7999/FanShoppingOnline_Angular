import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  check:boolean=true;
  lengthCart?:number=0;
  constructor() { }

  ngOnInit(): void {
    this.local();
    this.display();
  }

  local(){
    localStorage.setItem("name","Dat");
  }

  display(){
    localStorage.getItem("email");
    if(localStorage.getItem("email")=="fail" || localStorage.getItem("email")==null)
    {
      this.check=true;
    }
    else{
      this.check=false;
    }
    return localStorage.getItem("email");
  }
  logout(){
    localStorage.removeItem("email");
    this.check=true;
  }
  countCart(){
    return JSON.parse(localStorage.getItem("cart")||'[]')?.length;
  }
}
