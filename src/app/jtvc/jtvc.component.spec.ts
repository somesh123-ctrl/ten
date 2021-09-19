import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JtvcComponent } from './jtvc.component';

describe('JtvcComponent', () => {
  let component: JtvcComponent;
  let fixture: ComponentFixture<JtvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JtvcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JtvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
