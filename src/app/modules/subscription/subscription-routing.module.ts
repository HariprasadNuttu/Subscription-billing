import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscription.component';
import { AuthGuard } from './../../core/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    data: { title: 'Subscription' },
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'list',
        component: SubscriptionComponent,
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
export class SubscriptionRoutingModule { }
