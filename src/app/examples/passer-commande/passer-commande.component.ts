import { Component, OnInit } from '@angular/core';
import { ComandeService } from 'app/services/comande.service';
import { MachineService } from 'app/services/machine.services';

@Component({
  selector: 'app-passer-commande',
  templateUrl: './passer-commande.component.html',
  styleUrls: ['./passer-commande.component.css']
})
export class PasserCommandeComponent implements OnInit {

  newComande = {
    customer: '',
    totalPrice: 0,
    shippingAddress: '',
    paymentMethod: '',
    orderStatus: 'processing', 
    orderedAt: new Date(),
    deliveredAt: null
  };
  machines: any;

  ngOnInit(): void {
    const username = localStorage.getItem('username')
    if (username) {
      this.newComande.customer = username;
    }
    this.loadMachines();
  }

  constructor(private comandeService: ComandeService, private machineService:MachineService) { }


  loadMachines(){
    this.machineService.getAllMachines().subscribe(
      data => {
        this.machines = data;
      },
      error => {
        console.error('Error fetching machine list', error);
      }
    )
  }


  onSubmit(): void {
    this.comandeService.createComande(this.newComande).subscribe(
      response => {
        console.log('Order created successfully', response);
        // Optionally reset the form or provide feedback to the user
        this.resetForm();
      },
      error => {
        console.error('Error creating order', error);
      }
    );
  }

  resetForm(): void {
    this.newComande = {
      customer: '',
      totalPrice: 0,
      shippingAddress: '',
      paymentMethod: '',
      orderStatus: 'processing',
      orderedAt: new Date(),
      deliveredAt: null
    };
  }
}
