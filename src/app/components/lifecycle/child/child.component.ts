import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy

{
  @Input()
  title = '';

  constructor() {
    // console.log('Child.constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child.constructor', changes);
  }

  ngOnInit(): void {
    // console.log('Child.OnInit')
  }

  ngDoCheck(): void {
    console.log('Child.ngDoCheck')
  }
  ngAfterViewInit(): void {
    // console.log('Child.ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    // console.log('Child.ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    // console.log('Child.ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('Child.ngAfterContentInit');
  }

  ngOnDestroy(): void {
    // console.log('Child.ngOnDestroy');
  }

}

