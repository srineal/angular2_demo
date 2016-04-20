import {Component} from 'angular2/core';

import { CustomersComponent } from './customer/customers.component';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [CustomersComponent]
})
export class AppComponent {
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  title = 'Customer App';
  name = 'Ward';
  wardsColor = 'green';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }
}
