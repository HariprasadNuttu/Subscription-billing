import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../../core/services/user/user.service';
import { FormValidatorService } from './../../../core/services/forms/form-validator.service';
declare var jQuery: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,
    private formValidator: FormValidatorService) { }


    ngOnInit(): void {
      
      this.buildForm();
      this.setFormFoucs();
      
    }

    buildForm(){
      this.signUpForm = this.fb.group({
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
      if (this.signUpForm.valid) {
        this.userService.signUp(this.signUpForm.value);
        this.router.navigate(['auth/login']);
      } else {
        this.formValidator.setFormTouched(this.signUpForm)
      }
  
    }
  

}
