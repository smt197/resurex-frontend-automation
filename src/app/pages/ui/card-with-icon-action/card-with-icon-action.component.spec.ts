import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithIconActionComponent } from './card-with-icon-action.component';

describe('CardWithIconActionComponent', () => {
  let component: CardWithIconActionComponent;
  let fixture: ComponentFixture<CardWithIconActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithIconActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardWithIconActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
