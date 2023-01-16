import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  insertUtente(url:string, body:{}){
    return this.http.post(url, body)
  }
  getUtente(url:string){
    return this.http.get(url)
  }


}
