import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  template: string
}

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  expression = true;
  deepObj: any = null;

  users: User[] = [
    {
      id: 1,
      name: 'Aleks Book',
      template: 'bold'
    },
    {
      id: 2,
      name: 'Dmitro Book',
      template: 'italic'
    },
    {
      id: 2,
      name: 'Book Der',
      template: 'unknown'
    },

  ];


  userGenerate() {
    this.deepObj = {
      user: {
        name: 'Alex',
        surname: 'Book'
      }
    }
  }

  trackBy(index: number, user: User) {
    return user.id
  }
}
