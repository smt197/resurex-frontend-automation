import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpStatusComponent } from './otp-status.component';

describe('OtpStatusComponent', () => {
  let component: OtpStatusComponent;
  let fixture: ComponentFixture<OtpStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
