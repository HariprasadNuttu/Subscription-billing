import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceComponent } from './invoice.component';
import { AuthGuard } from './../../core/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    data: { title: 'Invoices' },
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'list',
        component: InvoiceComponent,
        data: { title: 'list' },
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
