import { ComandeService } from 'app/services/comande.service'; // Adjust the import path based on your file structure
import { Component, OnInit } from '@angular/core'; // Adjust path as needed

@Component({
  selector: 'app-gestion-comande',
  templateUrl: './gestion-comande.component.html',
  styleUrls: ['./gestion-comande.component.css']
})
export class GestionComandeComponent implements OnInit {
  comandes: any[] = [];

  constructor(private comandeService: ComandeService) {}

  ngOnInit(): void {
    this.loadComandes();
  }

  loadComandes(): void {
    this.comandeService.getAllComandes().subscribe(
      (data) => {
        this.comandes = data;
        console.log(this.comandes)
      },
      (error) => {
        console.error('Error fetching commandes', error);
      }
    );
  }
  deleteComande(orderId: string): void {
      this.comandeService.deleteComande(orderId).subscribe(
        (response) => {
          console.log('Order deleted successfully:', response);
          this.loadComandes(); // Reload the commandes after deletion
        },
        (error) => {
          console.error('Error deleting order', error);
        }
      );
  }
}
