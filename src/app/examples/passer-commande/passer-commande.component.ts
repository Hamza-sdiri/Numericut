import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ComandeService } from "app/services/comande.service";
import { ChangeDetectorRef } from "@angular/core"; // Import ChangeDetectorRef
import { MachineService } from "app/services/machine.services";

@Component({
  selector: "app-passer-commande",
  templateUrl: "./passer-commande.component.html",
  styleUrls: ["./passer-commande.component.css"],
})
export class PasserCommandeComponent implements OnInit {
  newComande = {
    customer: "",
    totalPrice: null,
    shippingAddress: "",
    paymentMethod: "",
    orderStatus: "processing",
    orderedAt: new Date(),
    deliveredAt: null,
    machine: null,
  };

  machines: any;

  constructor(
    private comandeService: ComandeService,
    private machineService: MachineService,
    private router: Router,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const username = localStorage.getItem("username");
    if (username) {
      this.newComande.customer = username;
    }
    this.loadMachines();
  }

  loadMachines() {
    this.machineService.getAllMachines().subscribe(
      (data) => {
        this.machines = data;
      },
      (error) => {
        console.error("Error fetching machine list", error);
      }
    );
  }

  onMachineSelect(machineId: string): void {
    const selectedMachine = this.machines.find(
      (machine) => machine._id === machineId
    );
    if (selectedMachine) {
      this.newComande.machine = selectedMachine.name;
      this.newComande.totalPrice = selectedMachine.price; // Update total price based on selected machine
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }

  onSubmit(): void {
    this.comandeService.createComande(this.newComande).subscribe(
      (response) => {
        console.log("Order created successfully", response);
        // Optionally reset the form or provide feedback to the user
        this.resetForm();
      },
      (error) => {
        console.error("Error creating order", error);
      }
    );
  }

  resetForm(): void {
    this.newComande = {
      customer: "",
      totalPrice: 0,
      shippingAddress: "",
      paymentMethod: "",
      orderStatus: "processing",
      orderedAt: new Date(),
      deliveredAt: null,
      machine: null,
    };
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
