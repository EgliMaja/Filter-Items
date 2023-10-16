import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyDetailsComponent } from './photography-details.component';

describe('PhotographyDetailsComponent', () => {
  let component: PhotographyDetailsComponent;
  let fixture: ComponentFixture<PhotographyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
