import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanComponent } from './plan.component';
import { AuthGuard } from './../../core/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    data: { title: 'Plan' },
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'list',
        component: PlanComponent,
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
  exports: [RouterModule],
})
export class PlanRoutingModule {}
