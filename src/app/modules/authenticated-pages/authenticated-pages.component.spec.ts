import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedPagesComponent } from './authenticated-pages.component';

describe('AuthenticatedPagesComponent', () => {
  let component: AuthenticatedPagesComponent;
  let fixture: ComponentFixture<AuthenticatedPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatedPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticatedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
