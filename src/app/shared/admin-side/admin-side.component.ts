import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.css']
})
export class AdminSideComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogout() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username')
    this.router.navigate(["/landing"]);
    
  } 

}
