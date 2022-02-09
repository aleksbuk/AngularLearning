import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input()
  title!: string

  @Output()
  sayHi = new EventEmitter<string>()

  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  constructor() {
    console.log('Constructor', this.title)
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title)
  }

  onSayHI() {
    this.sayHi.emit(this.title)
  }

  increment() {
    this.counterChange.emit(this.counter + 1)
  }

  decrement() {
    this.counterChange.emit(this.counter - 1)
  }

}
