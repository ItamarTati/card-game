import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErenYaegerComponent } from './eren-yaeger.component';

describe('ErenYaegerComponent', () => {
  let component: ErenYaegerComponent;
  let fixture: ComponentFixture<ErenYaegerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErenYaegerComponent]
    });
    fixture = TestBed.createComponent(ErenYaegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
