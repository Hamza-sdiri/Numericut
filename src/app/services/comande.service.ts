import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ComandeService {
  private apiUrl = 'http://localhost:3000/comande'; // Base URL for comande API

  constructor(private http: HttpClient) { }

  // Create a new comande
  createComande(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  // Get a comande by its ID
  getComandeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Get all comandes
   getAllComandes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Update a comande by its ID
  updateComande(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

   // Update order status
   updateOrderStatus(orderId: string, newStatus: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${orderId}/status`, { status: newStatus });
  }

  // Delete an order
  deleteComande(orderId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${orderId}`);
  }
}
