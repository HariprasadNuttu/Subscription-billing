import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DefaultLayoutComponent } from './modules/layout/default-layout/default-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthBeforeLoginGuard } from './core/guards/auth-before-login.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'subscription/list' },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children:[
      {
        path: 'subscription',
        loadChildren: () =>import('./modules/subscription/subscription.module').then((m) => m.SubscriptionModule)
      },
      {
        path: 'customers',
        loadChildren: () =>import('./modules/customers/customers.module').then((m) => m.CustomersModule)
      },
      {
        path: 'invoices',
        loadChildren: () =>import('./modules/invoice/invoice.module').then((m) => m.InvoiceModule)
      },
      {
        path: 'plan',
        loadChildren: () =>import('./modules/plan/plan.module').then((m) => m.PlanModule)
      },
    ]
  },
  {
    path: 'auth',
    canActivate: [AuthBeforeLoginGuard],
    loadChildren: () =>import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: '**', redirectTo: '/auth/404' },
];

@NgModule({
  imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
