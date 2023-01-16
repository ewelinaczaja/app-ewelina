import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIKey='AIzaSyArWSQMD9wzWa1qbWZWlKwYB26cfs3mPf8'
  singUpURL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`
  singInURL=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`
  user: User | undefined

  constructor(private http: HttpClient) { }

  createUser(email:string, id:string, token:string, expirationDate: Date){
    this.user = new User(email, id, token, expirationDate)
  }

  signUp (email:string, password:string){
    return this.http.post(this.singUpURL, {email:email, password:password, returnSecureToken:true})
  }

  signIn (email:string, password:string){
    return this.http.post(this.singInURL, {email:email, password:password, returnSecureToken:true})
  }
}
