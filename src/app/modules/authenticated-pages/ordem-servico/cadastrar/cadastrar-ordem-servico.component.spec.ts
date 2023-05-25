import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOrdemServicoComponent } from './cadastrar-ordem-servico.component';

describe('CadastrarOrdemServicoComponent', () => {
  let component: CadastrarOrdemServicoComponent;
  let fixture: ComponentFixture<CadastrarOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarOrdemServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
