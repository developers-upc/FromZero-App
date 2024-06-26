import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportMessageListComponent } from './support-message-list.component';

describe('SupportMessageListComponent', () => {
  let component: SupportMessageListComponent;
  let fixture: ComponentFixture<SupportMessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportMessageListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
