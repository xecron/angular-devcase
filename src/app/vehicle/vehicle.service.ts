import { Injectable } from '@angular/core';
import * as trafficMeisterResource from '../../../service/index.js';
import { Subject } from 'rxjs/index';
import { Vehicle } from './vehicle.interface';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable()
export class VehicleService {

  private vehicles$: Subject<Vehicle[]> = new Subject<Vehicle[]>();

  constructor(private snackBar: MatSnackBar) {}

  get getVehicles(): Subject<Vehicle[]> {
    return this.vehicles$;
  }

  public fetchVehicles(): void {
    trafficMeisterResource.fetchData((err, data) => {
      if (err) {
        console.error(err);
        this.vehicles$.next([]);
      } else {
        this.vehicles$.next(data);
        this.snackBar.open('Vehicles successfully fetched', null, {
          duration: 2000,
        } as MatSnackBarConfig);
      }
    });
  }
}
