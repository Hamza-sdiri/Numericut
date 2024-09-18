// src/app/components/machine-list/machine-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../services/machine.services';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {
  machines: any[] = [];

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    this.getMachines();
  }

  getMachines(): void {
    this.machineService.getAllMachines().subscribe({
      next: (data) => {
        console.log(data)
        this.machines = data;
      },
      error: (err) => {
        console.error('Error fetching machine list', err);
      }
    });
  }
}
