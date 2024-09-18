// src/app/services/machine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private apiUrl = 'http://localhost:3000/machine';  // Update with your API URL

  constructor(private http: HttpClient) { }

  createMachine(machine: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, machine);
  }
  getAllMachines(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
  deleteMachine(machineId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${machineId}`);
  }
}
