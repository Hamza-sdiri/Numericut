// src/app/components/create-machine/create-machine.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MachineService } from '../../services/machine.services';

@Component({
  selector: 'app-create-machine',
  templateUrl: './creat-machine.component.html',
  styleUrls: ['./creat-machine.component.css']
})
export class CreateMachineComponent implements OnInit{
  machineForm: FormGroup;


  constructor(private fb: FormBuilder, private machineService: MachineService) {
    
  }
  ngOnInit(): void {
    this.machineForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      SN: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required]
    }); 
  }

  onSubmit(): void {
    if (this.machineForm.valid) {
      this.machineService.createMachine(this.machineForm.value).subscribe({
        next: (response) => console.log('Machine created successfully', response),
        error: (err) => console.error('Error creating machine', err)
      });
    }
  }
}
