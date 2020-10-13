import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = {}
  constructor(private http: HttpClient) { }


  profileDetails() {
    
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
    // return this.http.get(environment.hostUrl + 'user/profile_details');
    
  }

  setUser(user: {}) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
  
  signIn(userData) {
    return this.http.post(environment.hostUrl + 'auth/sign_in', userData);
  }

  signUp(userData) {
    return this.http.post(environment.hostUrl + 'auth/sign_up', userData);
  }
  
  forgotPassword(userData) {
    return this.http.post(environment.hostUrl + 'auth/forgot_password', userData);
  }
  resetPassword(userData) {
    return this.http.post(environment.hostUrl + 'auth/reset_password', userData);
  }

  

}
