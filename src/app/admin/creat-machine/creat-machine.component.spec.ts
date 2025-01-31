import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineComponent } from './creat-machine.component';

describe('CreatMachineComponent', () => {
  let component: CreateMachineComponent;
  let fixture: ComponentFixture<CreateMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
