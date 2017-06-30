import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAlertViewComponent } from './simple-alert-view.component';

describe('SimpleAlertViewComponent', () => {
  let component: SimpleAlertViewComponent;
  let fixture: ComponentFixture<SimpleAlertViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAlertViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAlertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
