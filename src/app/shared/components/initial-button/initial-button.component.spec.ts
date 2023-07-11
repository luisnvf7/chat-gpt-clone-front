import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialButtonComponent } from './initial-button.component';

describe('InitialButtonComponent', () => {
  let component: InitialButtonComponent;
  let fixture: ComponentFixture<InitialButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialButtonComponent]
    });
    fixture = TestBed.createComponent(InitialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
