import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleRowSelectComponent } from './toggle-row-select.component';

describe('ToggleRowSelectComponent', () => {
  let component: ToggleRowSelectComponent;
  let fixture: ComponentFixture<ToggleRowSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleRowSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleRowSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
