import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CategoryComponent } from './category/category.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { FilterpageComponent } from './filterpage/filterpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', redirectTo:'homepage', pathMatch:'full'},
  { path: 'filter/:id', component: FilterpageComponent },
  { path: 'search/:name', component: FilterpageComponent },
  { path: 'product', component: ProductComponent },
  { path: 'detail/:id', component: DetailpageComponent },
  { path: 'cateType', component: CategoryComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartpageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
