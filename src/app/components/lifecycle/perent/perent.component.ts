import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import { Subject, Subscription } from "rxjs";
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerentComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ContentChild('ref', {static: true})
  appChild?: ChildComponent;

  @ContentChildren('ref')
  childrenContent!: QueryList<ChildComponent>

  @ContentChildren('foo, bar, baz', {read: TemplateRef})
  templates!: QueryList<TemplateRef<{ $implicit: string }>>

  @Input()
  title = 'Before init'

  @Input()
  array = [1]
  subscription?: Subscription;
  subscriptions: Subscription[] = [];
  destroy$ = new Subject()
  private length = this.array.length

  constructor(private cdr: ChangeDetectorRef) {
    console.log('ParentComponent.constructor', this.title, this.appChild)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.ngOnChanges', changes, this.title, this.appChild);
  }

  ngOnInit(): void {
    // console.log('ParentComponent.OnInit', this.title)
    // // this.subscription = fromEvent(document, 'click').subscribe(console.log)
    // // this.subscriptions.push(fromEvent(document, 'click').subscribe(console.log))
    // fromEvent(document, 'click').pipe(takeUntil(this.destroy$)).subscribe(console.log)
  }

  ngDoCheck(): void {
    console.log('ParentComponent.ngDoChe0.0ck', this.title, this.appChild)
    if (this.length !== this.array.length){
      console.log('has changes');
      this.cdr.markForCheck();
      this.length = this.array.length;
    }
  }
  ngAfterViewInit(): void {
    console.log('ParentComponent.ngAfterViewInit', this.title, this.appChild)
  }

  ngAfterViewChecked(): void {
    console.log('ParentComponent.ngAfterViewChecked', this.title, this.appChild);
  }

  ngAfterContentInit(): void {

    this.appChild?.sayHi()
    if (this.appChild) {
      this.appChild.title = 'Lockal changes'
    }
    console.log('tamplate', this.templates)
    console.log('ParentComponent.ngAfterContentInit', this.title, this.appChild, this.childrenContent);
  }

  ngAfterContentChecked(): void {
    console.log('ParentComponent.ngAfterContentInit', this.title, this.appChild);
  }

  ngOnDestroy(): void {
    console.log('ParentComponent.ngOnDestroy', this.title, this.appChild);
    // // this.subscription?.unsubscribe(), this.appChild
    // this.subscriptions.forEach(s => s.unsubscribe())
    // this.destroy$.next(true);
    // this.destroy$.complete();
  }

}
