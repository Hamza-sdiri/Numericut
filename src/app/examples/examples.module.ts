import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasserCommandeComponent } from './passer-commande/passer-commande.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, FormsModule, NgbModule],
  declarations: [
    LandingComponent,
    SignupComponent,
    ProfileComponent,
    LoginComponent,
    PasserCommandeComponent,
  ],
})
export class ExamplesModule {}
