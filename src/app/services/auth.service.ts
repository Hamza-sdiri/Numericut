import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token"); 
  }

  login(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/auth/login", data);
  }
  register(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/auth/register", data);
  }

  getAllUsers(): Observable<any>{
    return this.http.get("http://localhost:3000/auth/allUsers");
  }

  deleteUser(id: any): Observable<any>{
    return this.http.delete("http://localhost:3000/auth/deleteUser/"+id);
  }

}