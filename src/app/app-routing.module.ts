import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent , children: [
    {
      path: 'contact/1',
      component: CustomerDetailsComponent
    },
  ],},
  { path: '', redirectTo: 'customers', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'customers', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
