import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindint',
  templateUrl: './bindint.component.html',
  styleUrls: ['./bindint.component.css']
})
export class BindintComponent implements OnInit {
  phone = '0990556'
  user = {
    name: 'Jhon',
    surname: 'Doe'
  }

  boldText = `<b>This is the bold text</b>`;
  login = '';
  password = '';

  constructor() {
  }


  get fullName() {
    return this.user.name + ' ' + this.user.surname
  }

  ngOnInit(): void {
    setTimeout(() => this.updatePhone(), 3000)
  }

  updatePhone() {
    this.phone = Math.round(Math.random() * 1000000) + '';
  }

  onChangeInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.phone = target.value
  }

  onSubmit() {
    if(this.login && this.password) {
      alert(`Welcome ${this.login}`)
      this.login = this.password = '';
      return

    }
    alert(' you miss some fields')
  }


}
