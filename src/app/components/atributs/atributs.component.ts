import { Component } from '@angular/core';

@Component({
  selector: 'app-atributs',
  templateUrl: './atributs.component.html',
  styleUrls: ['./atributs.component.css']
})
export class AtributsComponent  {
 showHidden() {
   return '[hidden]: false'
 }
}
