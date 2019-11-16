import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/internal/operators';
import {Vehicle} from './vehicle.interface';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  public vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) {
    // Trigger fetching
    this.fetchVehicles();
  }

  ngOnInit(): void {
    this.vehicleService.getVehicles.pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe({
      next: (vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
        console.log(vehicles);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  fetchVehicles(): void {
    this.vehicleService.fetchVehicles();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
