import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuDeckComponent } from './cpu-deck.component';

describe('CpuDeckComponent', () => {
  let component: CpuDeckComponent;
  let fixture: ComponentFixture<CpuDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpuDeckComponent]
    });
    fixture = TestBed.createComponent(CpuDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
