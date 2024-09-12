import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LoginComponent } from './examples/login/login.component';
import { ExamplesModule } from './examples/examples.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasserCommandeComponent } from './examples/passer-commande/passer-commande.component';
import { AdminModule } from './admin/admin.module';
import { GestionComandeComponent } from './admin/gestion-comande/gestion-comande.component';
import { GestionMachineComponent } from './admin/gestion-machine/gestion-machine.component';


const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "home", component: ComponentsComponent },
  { path: "user-profile", component: ProfileComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "landing", component: LandingComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "gestioncomande", component: GestionComandeComponent },
  { path: "passercomande", component: PasserCommandeComponent },
  
  
  //admin routes
  {
    path: "gestion-comande",
    component: GestionComandeComponent,
  },
  {
    path: "gestion-machine",
    component: GestionMachineComponent,
  },
];

@NgModule({
  imports: [
    AdminModule,
    ReactiveFormsModule,
    ExamplesModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [],
})
export class AppRoutingModule {}
