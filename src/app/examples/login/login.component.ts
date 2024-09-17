import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  test: Date = new Date();
  focus;
  focus1;

  constructor(
    private authService:AuthService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

   onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (res) => {
            console.log(res);
            if(res.role === "user"){
              this.router.navigate(["passercomande"]);
            }
            else{
              this.router.navigate(["gestion-comande"]);

            }
            localStorage.setItem("token",res.token)
            localStorage.setItem('username',res.username)
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
