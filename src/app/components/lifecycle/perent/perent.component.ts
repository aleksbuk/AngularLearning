import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Subject, Subscription } from "rxjs";

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerentComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy

{
  @Input()
  title = 'Before init'

  @Input()
  array = [1]
  subscription?: Subscription;
  subscriptions: Subscription[] = [];
  destroy$ = new Subject()
  private length = this.array.length

  constructor(private cdr: ChangeDetectorRef) {
    console.log('ParentComponent.constructor', this.title)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.ngOnChanges', changes, this.title);
  }

  ngOnInit(): void {
    // console.log('ParentComponent.OnInit', this.title)
    // // this.subscription = fromEvent(document, 'click').subscribe(console.log)
    // // this.subscriptions.push(fromEvent(document, 'click').subscribe(console.log))
    // fromEvent(document, 'click').pipe(takeUntil(this.destroy$)).subscribe(console.log)
  }

  ngDoCheck(): void {
    console.log('ParentComponent.ngDoChe0.0ck', this.title)
    if (this.length !== this.array.length){
      console.log('has changes');
      this.cdr.markForCheck();
      this.length = this.array.length;
    }
  }
  ngAfterViewInit(): void {
    // console.log('ParentComponent.ngAfterViewInit', this.title)
  }

  ngAfterViewChecked(): void {
    // console.log('ParentComponent.ngAfterViewChecked', this.title);
  }

  ngAfterContentInit(): void {
    // console.log('ParentComponent.ngAfterContentInit', this.title);
  }

  ngAfterContentChecked(): void {
    // console.log('ParentComponent.ngAfterContentInit', this.title);
  }

  ngOnDestroy(): void {
    // console.log('ParentComponent.ngOnDestroy', this.title);
    // // this.subscription?.unsubscribe()
    // this.subscriptions.forEach(s => s.unsubscribe())
    // this.destroy$.next(true);
    // this.destroy$.complete();
    }

}
