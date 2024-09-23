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
  deleteUsers(id: string): void {
    this.authService.deleteUser(id).subscribe(
      (response) => {
        console.log("user deleted successfully:", response);
        this.loadUsers(); 
      },
      (error) => {
        console.error("Error deleting user", error);
      }
    );
  }
  
}
