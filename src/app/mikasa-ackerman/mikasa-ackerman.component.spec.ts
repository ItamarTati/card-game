import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikasaAckermanComponent } from './mikasa-ackerman.component';

describe('MikasaAckermanComponent', () => {
  let component: MikasaAckermanComponent;
  let fixture: ComponentFixture<MikasaAckermanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MikasaAckermanComponent]
    });
    fixture = TestBed.createComponent(MikasaAckermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
