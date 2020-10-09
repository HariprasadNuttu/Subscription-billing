import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router , private userService: UserService) {}

  sendToken(token: string) {
    localStorage.setItem('Authentication-token', token);
  }

  getToken() {
    return localStorage.getItem('Authentication-token');
  }

  isLoggednIn() {
    return  new Promise(
      (resolve, reject) => {
        if(this.getToken() !== null){
          resolve(false)
        }else{
          resolve(true)
        }
      })
     
  }

  isAuthenticated() {
    return  new Promise(
      (resolve, reject) => {
        if(this.getToken() !== null){
          
          if (Object.entries(this.userService.getUser()).length === 0 && this.userService.getUser().constructor === Object) {
            this.userService.profileDetails().subscribe(response => {
              console.log(response)
              if (response['status']) {
                this.userService.setUser(response['data']);
                resolve(true);
              } else {
                resolve(false);
              }
            }, err => {
              console.log(err);
              resolve(false);
            });
          } else {
            resolve(true);
          }
  
        }else{
          resolve(false)
        }


      }
    );
  }

  logout() {
    localStorage.removeItem('Authentication-token');
    this.router.navigate(['auth/login']);
  }
}
