import { ComandeService } from 'app/services/comande.service'; // Adjust the import path based on your file structure
import { Component, OnInit } from '@angular/core'; // Adjust path as needed

@Component({
  selector: "app-gestion-comande",
  templateUrl: "./gestion-comande.component.html",
  styleUrls: ["./gestion-comande.component.css"],
})
export class GestionComandeComponent implements OnInit {
  comandes: any[] = [];
  commande: any;
  isEditing : boolean
  constructor(private comandeService: ComandeService) {}

  ngOnInit(): void {
    this.loadComandes();
  }

  setIsEditing(): void {
    this.isEditing = true;
  }

  loadComandes(): void {
    this.comandeService.getAllComandes().subscribe(
      (data) => {
        this.comandes = data;
        console.log(this.comandes);
      },
      (error) => {
        console.error("Error fetching commandes", error);
      }
    );
  }
  deleteComande(orderId: string): void {
    this.comandeService.deleteComande(orderId).subscribe(
      (response) => {
        console.log("Order deleted successfully:", response);
        this.loadComandes(); 
      },
      (error) => {
        console.error("Error deleting order", error);
      }
    );
  }

  editOrderStatus(id: string): void {
    this.commande = this.comandeService.getComandeById(id).subscribe({
      next: (data) => {
        this.commande = data;
        this.commande.orderStatus = "delivered";
        this.comandeService.updateComande(id, this.commande).subscribe({
          next: (response) => {
            console.log("Order status updated successfully:", response);
            this.loadComandes();
          },
          error: (error) => {
            console.error("Error updating order status", error);
          },
        });
      },
      error: (error) => {
        console.error("Error fetching commandes", error);
      },
    });
  }
}
