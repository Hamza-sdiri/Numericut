import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMachineComponent } from './gestion-machine.component';

describe('GestionMachineComponent', () => {
  let component: GestionMachineComponent;
  let fixture: ComponentFixture<GestionMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
