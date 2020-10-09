import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { AuthGuard } from './../../core/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    data: { title: 'customers' },
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'list',
        component: CustomersComponent,
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
export class CustomersRoutingModule { }
