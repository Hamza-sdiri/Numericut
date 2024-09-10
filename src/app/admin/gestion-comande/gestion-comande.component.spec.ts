import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComandeComponent } from './gestion-comande.component';

describe('GestionCommandeComponent', () => {
  let component: GestionComandeComponent;
  let fixture: ComponentFixture<GestionComandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionComandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionComandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
