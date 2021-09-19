import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlearnComponent } from './alearn.component';

describe('AlearnComponent', () => {
  let component: AlearnComponent;
  let fixture: ComponentFixture<AlearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
