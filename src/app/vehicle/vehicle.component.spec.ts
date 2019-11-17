import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';
import {VehicleService} from './vehicle.service';
import {CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import {FilterPipe} from '../utils/filter.pipe';
import {DeduplicatePipe} from '../utils/deduplicate.pipe';
import {SpreadPipe} from '../utils/spread.pipe';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';
import {mockVehiclesData} from './vehicle.service.spec';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let service: VehicleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      declarations: [
        VehicleComponent,
        FilterPipe,
        DeduplicatePipe,
        SpreadPipe,
      ],
      providers: [VehicleService, MatSnackBar],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    service = TestBed.get(VehicleService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;

    service.fetchVehicles();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit', () => {
    service.getVehicles.next(mockVehiclesData);
    expect(component.vehicles).toBe(mockVehiclesData);
  });

  it('fetchVehicles', () => {
    const serviceSpy = spyOn(service, 'fetchVehicles');

    component.fetchVehicles();
    expect(serviceSpy).toHaveBeenCalled();
    expect(component.hasData).toBeFalsy();
  });

  it('resetFilters', () => {
    component.selectedType = 'car';
    component.selectedColor = 'red';

    component.resetFilters();
    expect(component.selectedColor).toBeFalsy();
    expect(component.selectedType).toBeFalsy();
    expect(component.selectedBrand).toBeFalsy();
  });
});
