import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonEditComponent } from './cartoon-edit.component';

describe('CartoonEditComponent', () => {
  let component: CartoonEditComponent;
  let fixture: ComponentFixture<CartoonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
