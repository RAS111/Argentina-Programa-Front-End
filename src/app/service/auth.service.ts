import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8080/generate-token";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log("el login esta corriendo exitosamente");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currentUser") || "{}"));
  }


  login(credentials: any): Observable<any> {
    return this.http.post(this.url, credentials).pipe(map(data => {
      sessionStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }))
  }

  // public generateToken(loginData: any){
  //   return this.http.post(this.url, loginData)
  // }
}
