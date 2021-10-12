import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './homepage/product-list/product-list.component';
import { SideBarComponent } from './homepage/side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FilterpageComponent } from './filterpage/filterpage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartpageComponent } from './cartpage/cartpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    HeaderComponent,
    HomepageComponent,
    ProductListComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    FilterpageComponent,
    CartpageComponent,
    DetailpageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
