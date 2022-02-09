import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from "./user.component";
import { ProductComponent } from "./components/product/product.component";
import { CategoryComponent } from './category/category.component';
import { ReviewComponent } from './components/review/review.component';
import { BindintComponent } from './components/bindint/bindint.component';
import { FormsModule } from "@angular/forms";
import { FooComponent } from './components/foo/foo.component';
import { AtributsComponent } from './components/atributs/atributs.component';
import { NgTamplateComponent } from './components/ng-tamplate/ng-tamplate.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    ReviewComponent,
    BindintComponent,
    FooComponent,
    AtributsComponent,
    NgTamplateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
