import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expression = false;
  title = 'AngulaMaxGrom';
  age = 18;

  onSayHi(text: string) {
    console.log(text)
  }

}
