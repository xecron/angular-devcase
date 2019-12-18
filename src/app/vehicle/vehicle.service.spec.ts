import {async, TestBed} from '@angular/core/testing';

import * as trafficMeisterResource from '../../../service/index.js';
import { VehicleService } from './vehicle.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';
import {Vehicle} from './vehicle.interface';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const mockVehiclesData: Vehicle[] = [{
  id: 0,
  type: 'car',
  brand: 'Ferrari',
  img: 'Ferrari.jpg',
  colors: ['red', 'blue'],
}];

describe('VehicleService', () => {
  let snackBar: MatSnackBar;
  let service: VehicleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule, MatSnackBarModule, BrowserAnimationsModule],
      providers: [MatSnackBar, VehicleService],
    });

    snackBar = TestBed.get(MatSnackBar);
    service = TestBed.get(VehicleService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data and pass to vehicles$', () => {
    spyOn(trafficMeisterResource, 'fetchData').and.callFake((cb) => cb(null, mockVehiclesData));
    const snackBarSpy = spyOn(snackBar, 'open');

    const subjectSpy = spyOn(service.getVehicles, 'next');
    service.fetchVehicles();

    expect(subjectSpy).toHaveBeenCalledWith(mockVehiclesData);
    expect(snackBarSpy).toHaveBeenCalledWith('Vehicles successfully fetched', null, {
      duration: 2000,
    });
  });

  it('should not fetch data and pass empty [] to vehicles$', () => {
    spyOn(trafficMeisterResource, 'fetchData').and.callFake((cb) => cb('Error'));

    const subjectSpy = spyOn(service.getVehicles, 'next');
    service.fetchVehicles();

    expect(subjectSpy).toHaveBeenCalledWith([]);
  });
});
