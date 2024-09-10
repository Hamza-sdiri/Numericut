import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComandeComponent } from './gestion-comande/gestion-comande.component';
import { GestionMachineComponent } from './gestion-machine/gestion-machine.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'gestion-comande', component: GestionComandeComponent },
  { path: 'gestion-machine', component: GestionMachineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


@NgModule({
  declarations: [
    GestionMachineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
