import { Component, OnInit } from '@angular/core';
import { ComandeService } from 'app/services/comande.service';

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
    orderStatus: 'processing', // Default value
    orderedAt: new Date(),
    deliveredAt: null
  };

  constructor(private comandeService: ComandeService) { }

  ngOnInit(): void { }

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
