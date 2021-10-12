import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserWeb } from '../shared/authservice/user.model';
import { UserService } from '../shared/authservice/user.service';
import { CategoryService } from '../shared/categoryservice/category.service';
declare var M:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  constructor(public _usersService: UserService) { }
  ngOnInit(): void {
    this.resetForm();
  }
  register(form: NgForm){
    console.log(form.value);
    this._usersService.postUser(form.value).subscribe((res)=>{
      // this.resetForm(form);
      // this.cateTypeList();
      M.toast({html:'Register Success',class:'rounded'});
    });
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
  userList(){
    this._usersService.getUserList().subscribe((res)=>{
      this._usersService.users=res as UserWeb[];
    });
  }

  onEdit(user:UserWeb){
    this._usersService.selectedUser=user;
  }

  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to delete')==true){
      this._usersService.deleteUser(_id).subscribe((res)=>{
        this.userList();
        this.resetForm(form);
        M.toast({html:'Delete Successfully',class:'rounded'})
      })
    }
  }
}
