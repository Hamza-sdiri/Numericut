import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MachineService } from 'app/services/machine.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-machine',
  templateUrl: './edit-machine.component.html',
  styleUrls: ['./edit-machine.component.css']
})
export class EditMachineComponent implements OnInit {
  editMachineForm: FormGroup;
  machineId:string
  constructor(private fb: FormBuilder, private machineService: MachineService, private route:ActivatedRoute, private router:Router) {
    this.editMachineForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      SN: ["", Validators.required],
      model: ["", Validators.required],
      price: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadMachineDetails();
  }

  loadMachineDetails(): void {
    this.route.paramMap.subscribe(params => {
      this.machineId = params.get('id') || '';
      if (this.machineId) {
        this.machineService.getMachineById(this.machineId).subscribe(machine => {
          console.log(machine)
          this.editMachineForm.patchValue(machine);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.editMachineForm.valid) {
      this.machineService.updateMachine(this.machineId,this.editMachineForm.value).subscribe(response => {
        console.log('Machine updated successfully', response);
        this.router.navigate(['/machine-list']);
      }, error => {
        console.error('Error updating machine', error);
        // Handle error
      });
    }
  }
}
