import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "app/services/auth.service";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    registerForm: FormGroup;
constructor(private authService:AuthService){

}
    ngOnInit() {
      this.registerForm = new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(''),
        password: new FormControl('', Validators.required)
      });
    }
  
    onSubmit() {
      if (this.registerForm.valid) {
        this.authService.register(this.registerForm.value).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }

        
}
