import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOrdemServicoComponent } from './consultar-ordem-servico.component';

describe('ConsultarOrdemServicoComponent', () => {
  let component: ConsultarOrdemServicoComponent;
  let fixture: ComponentFixture<ConsultarOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarOrdemServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
