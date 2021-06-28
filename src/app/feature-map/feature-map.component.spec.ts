import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMapComponent } from './feature-map.component';

describe('FeatureMapComponent', () => {
  let component: FeatureMapComponent;
  let fixture: ComponentFixture<FeatureMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
