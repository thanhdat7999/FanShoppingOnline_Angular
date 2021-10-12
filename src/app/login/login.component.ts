import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserWeb } from '../shared/authservice/user.model';
import { UserService } from '../shared/authservice/user.service';
declare var M:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  users!: UserWeb;
  constructor(public _usersService: UserService, private router: Router) { 
  }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
    }
    this._usersService.selectedUser={
      _id:"",
      fullName:"",
      email:"",
      password:""
    }
  }

  signin(form: NgForm){
    this._usersService.getUserByEmail(form.value.email).subscribe((res)=>{
      this._usersService.users=res as UserWeb[];
      console.log(this._usersService.users.length);
      this.validationUser(form, this._usersService.users);
    });
  }
  validationUser(form: NgForm, users: UserWeb[]){
    if(this._usersService.users.length>0){
      if(form.value.password == this._usersService.users[0].password){
        localStorage.setItem('email',JSON.stringify(form.value.email));
        this.router.navigate(['homepage']).then(()=>{window.location.reload()});
      }
      else{
        localStorage.setItem('email',JSON.stringify("fail"));
        M.toast({html:'Login Fail',class:'rounded'});
      }
    }
  }
}
