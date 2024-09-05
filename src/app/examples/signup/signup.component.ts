import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    constructor() { }

    ngOnInit() {
        // this.signupForm = this.formBuilder.group({
        //     firstName: ["", Validators.required],
        //     lastName: ["", Validators.required],
        //     email: ["", [Validators.required, Validators.email]],
        //     password: ["", [Validators.required, Validators.minLength(6)]],
        // });
    }

    // onSubmit() {
    //     if (this.signupForm.invalid) {
    //         return;
    //     }

    //     // Perform signup logic here
    // }
}
