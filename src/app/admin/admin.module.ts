import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComandeComponent } from './gestion-comande/gestion-comande.component';
import { GestionMachineComponent } from './gestion-machine/gestion-machine.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateMachineComponent } from './creat-machine/creat-machine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MachineListComponent } from './machine-list/machine-list.component';

const routes: Routes = [
  { path: 'gestion-comande', component: GestionComandeComponent },
  { path: 'creat-machine', component: CreateMachineComponent },
  { path: 'gestion-machine', component: GestionMachineComponent }
];



@NgModule({
  declarations: [
    GestionComandeComponent,
    GestionMachineComponent,
    CreateMachineComponent,
    MachineListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
