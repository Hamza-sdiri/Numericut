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
import { CreateMachineComponent } from './admin/creat-machine/creat-machine.component';
import { MachineListComponent } from './admin/machine-list/machine-list.component';
import { EditMachineComponent } from './admin/edit-machine/edit-machine.component';
import { AuthGuard } from './services/auth-guard.service';
import { GestionUsersComponent } from './admin/gestion-users/gestion-users.component';


const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "home", component: ComponentsComponent },
  { path: "user-profile", component: ProfileComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "landing", component: LandingComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  {
    path: "gestioncomande",
    component: GestionComandeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "passercomande",
    component: PasserCommandeComponent,
    canActivate: [AuthGuard],
  },

  // admin routes
  {
    path: "gestion-comande",
    component: GestionComandeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "gestion-machine",
    component: GestionMachineComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "creat-machine",
    component: CreateMachineComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "machine-list",
    component: MachineListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "edit-machine/:id",
    component: EditMachineComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "gestion-users",
    component:GestionUsersComponent,
    canActivate:[AuthGuard]
  }

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
