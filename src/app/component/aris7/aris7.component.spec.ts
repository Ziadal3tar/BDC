import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARIS7Component } from './aris7.component';

describe('ARIS7Component', () => {
  let component: ARIS7Component;
  let fixture: ComponentFixture<ARIS7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ARIS7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ARIS7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
