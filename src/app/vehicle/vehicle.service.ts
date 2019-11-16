import { Injectable } from '@angular/core';
import * as trafficMeisterResource from '../../../service/index.js';
import { Subject } from 'rxjs/index';
import { Vehicle } from './vehicle.interface';

@Injectable()
export class VehicleService {

  private vehicles$: Subject<Vehicle[]> = new Subject<Vehicle[]>();

  constructor() {}

  get getVehicles(): Subject<Vehicle[]> {
    return this.vehicles$;
  }

  public fetchVehicles(): void {
    trafficMeisterResource.fetchData((err, data) => {
       if (err) {
         this.vehicles$.error(err);
       } else {
         this.vehicles$.next(data);
       }
    });
  }
}
