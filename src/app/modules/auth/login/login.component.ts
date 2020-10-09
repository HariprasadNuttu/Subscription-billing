import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../../core/services/user/user.service';
import { AuthService } from './../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private fb: FormBuilder ,private userService: UserService ,private router: Router , private _authService:AuthService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this._authService.sendToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDIyMDIzMzksImV4cCI6MTYzMzczODMzOSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.O7prHKmT5hYgxWghBTdyXGU9YPbdT7w69rZblJWEquw')
      this.userService.signIn(this.signInForm.value);
      this.router.navigate(['subscription']);
    }else{

    }
    
  }

signIn() {
}



}
