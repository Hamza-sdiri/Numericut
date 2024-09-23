import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

  users: any;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.authService.getAllUsers().subscribe(
      (res:any)=>{
        console.log(res);
        this.users = res;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
