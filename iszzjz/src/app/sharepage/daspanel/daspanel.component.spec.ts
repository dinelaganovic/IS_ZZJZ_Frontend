import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaspanelComponent } from './daspanel.component';

describe('DaspanelComponent', () => {
  let component: DaspanelComponent;
  let fixture: ComponentFixture<DaspanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaspanelComponent]
    });
    fixture = TestBed.createComponent(DaspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
