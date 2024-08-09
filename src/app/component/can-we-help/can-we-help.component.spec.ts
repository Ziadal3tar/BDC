import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanWeHelpComponent } from './can-we-help.component';

describe('CanWeHelpComponent', () => {
  let component: CanWeHelpComponent;
  let fixture: ComponentFixture<CanWeHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanWeHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanWeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
