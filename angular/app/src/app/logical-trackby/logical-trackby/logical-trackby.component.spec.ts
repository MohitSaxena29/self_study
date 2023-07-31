import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalTrackbyComponent } from './logical-trackby.component';

describe('LogicalTrackbyComponent', () => {
  let component: LogicalTrackbyComponent;
  let fixture: ComponentFixture<LogicalTrackbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogicalTrackbyComponent]
    });
    fixture = TestBed.createComponent(LogicalTrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
