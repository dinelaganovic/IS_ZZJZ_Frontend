import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeworkersComponent } from './administrativeworkers.component';

describe('AdministrativeworkersComponent', () => {
  let component: AdministrativeworkersComponent;
  let fixture: ComponentFixture<AdministrativeworkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeworkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
