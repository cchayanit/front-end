import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonAddComponent } from './cartoon-add.component';

describe('CartoonAddComponent', () => {
  let component: CartoonAddComponent;
  let fixture: ComponentFixture<CartoonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
