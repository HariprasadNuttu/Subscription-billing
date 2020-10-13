import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { UserService } from './../../../core/services/user/user.service';
import { FormValidatorService } from './../../../core/services/forms/form-validator.service';
declare var jQuery: any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  resetToken: string;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,
     private formValidator: FormValidatorService ,private route: ActivatedRoute) { }

     ngOnInit(): void {
        this.setFormFocus();
        this.getResetToken();
        this.buildForm();
    }

    getResetToken(){
      this.route.params.subscribe(result => {
        this.resetToken = result.resetToken;
      });
    }

    buildForm(){
      this.resetPasswordForm = this.fb.group({
        password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required , this.passwordMatcher.bind(this)]]
      
      });
    }    
    setFormFocus(){
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
      if (this.resetPasswordForm.valid) {
        let params = this.resetPasswordForm.value;
        params.resetToken = this.resetToken;
        this.userService.resetPassword(params);
        this.router.navigate(['auth/login']);
      } else {
        this.formValidator.setFormTouched(this.resetPasswordForm)
      }
  
    }

     passwordMatcher(control: FormControl): { [s: string]: boolean } {
      if (
          this.resetPasswordForm &&
          (control.value !== this.resetPasswordForm.controls.password.value)
      ) {
        console.log(control.value ,this.resetPasswordForm.controls.password.value)
          return { passwordNotMatch: true };
      }
      return null;
  }


}
