import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'AngulaMaxGrom';
  show = true;
  array = [1, 2, 3]

  modifyArray() {
    this.array.push(5)
  }
}
