import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProdutoComponent } from './consultar-produto.component';

describe('ConsultarProdutoComponent', () => {
  let component: ConsultarProdutoComponent;
  let fixture: ComponentFixture<ConsultarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
