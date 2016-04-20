import { Component, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
  moduleId: __moduleName,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  directives: [CustomerComponent],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
  customers: Observable<any[]>;

  constructor(private _customerService: CustomerService) {  }

  ngOnInit() {
    this.customers = this._customerService.getCustomers()
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
        return Observable.of(true);
        // now we eat it, but only if the
        // message has been communicated to the user
      });
  }
}
