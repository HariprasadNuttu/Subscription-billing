import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthBeforeLoginGuard } from 'src/app/core/guards/auth-before-login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivateChild: [AuthBeforeLoginGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Log In' },
      },
      {
        path: 'sign-up',
        component: SignupComponent,
        data: { title: 'Sign Up' },
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { title: 'Forgot Password' },
      },
      {
        path: 'reset-password/:resetToken',
        component: ResetPasswordComponent,
        data: { title: 'Reset password' },
      },
      {
        path: '404',
        component: NotFoundComponent,
        data: { title: '404' },
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
