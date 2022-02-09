import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from "./user.component";
import { ProductComponent } from "./components/product/product.component";
import { ReviewComponent } from './components/review/review.component';
import { BindintComponent } from './components/bindint/bindint.component';
import { FormsModule } from "@angular/forms";
import { FooComponent } from './components/foo/foo.component';
import { AtributsComponent } from './components/atributs/atributs.component';
import { InputOutputComponent } from './components/input-output/input-output.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    ReviewComponent,
    BindintComponent,
    FooComponent,
    AtributsComponent,
    InputOutputComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
