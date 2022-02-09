import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-tamplate',
  templateUrl: './ng-tamplate.component.html',
  styleUrls: ['./ng-tamplate.component.css']
})
export class NgTamplateComponent {

  @Input()
  template?: TemplateRef<{$implicit: number}>
}
