import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryType } from '../categoryservice/category.model';
import { UserWeb } from '../authservice/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser!: UserWeb;
  selectedCategoryType!: CategoryType;
  users: UserWeb[] = [];
  readonly baseURL='http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  postUser(user: UserWeb){
    return this.http.post(this.baseURL, user);
  }

  getUserList(){
    return this.http.get(this.baseURL);
  }

  getUserByEmail(_email:string){
    return this.http.get(this.baseURL + '/usermail' + `/${_email}`);
  }

  putUser(user: UserWeb){
    return this.http.put(this.baseURL + `/${user._id}`,user);
  }

  deleteUser(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
