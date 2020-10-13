import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../../core/services/user/user.service';
import { AuthService } from './../../../core/authentication/auth.service';
import { FormValidatorService } from './../../../core/services/forms/form-validator.service';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,
    private authService: AuthService, private formValidator: FormValidatorService) { }

  ngOnInit(): void {

    this.setFormFoucs();
    this.buildForm();    
    
  }

  buildForm(){
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, this.formValidator.emailValidator]],
      password: ['', Validators.required],
    });
  }

  setFormFoucs(){
    (function ($) {
      $(document).ready(function () {
        // label will come down if lost the focus on input field
        $('.input100').each(function () {
          $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
              $(this).addClass('has-val');
            }
            else {
              $(this).removeClass('has-val');
            }
          })
        })
        let showPass = 0;
        $('.btn-show-pass').on('click', function () {
          if (showPass == 0) {
            $(this).next('input').attr('type', 'text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
          }
          else {
            $(this).next('input').attr('type', 'password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
          }

        });

      });
    })(jQuery);
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.authService.sendToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDIyMDIzMzksImV4cCI6MTYzMzczODMzOSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.O7prHKmT5hYgxWghBTdyXGU9YPbdT7w69rZblJWEquw')
      this.userService.signIn(this.signInForm.value);
      this.router.navigate(['subscription']);
    } else {
      this.formValidator.setFormTouched(this.signInForm)
    }

  }


}
