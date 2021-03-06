import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

const routes: Routes = [
  { 
    path: '', 
    component: CustomerListComponent 
  },
  { 
    path: 'info', 
    component: CustomersCardComponent 
  },
  { 
    path: 'new-customer', 
    component: CustomerNewComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
