import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCommandeComponent } from './gestion-commande/gestion-commande.component';
import { GestionMachineComponent } from './gestion-machine/gestion-machine.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'gestion-commande', component: GestionCommandeComponent },
  { path: 'gestion-machine', component: GestionMachineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


@NgModule({
  declarations: [
    GestionCommandeComponent,
    GestionMachineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
