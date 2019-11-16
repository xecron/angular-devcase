import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  constructor(private vehicleService: VehicleService) {
    // Trigger fetching
    this.vehicleService.fetchVehicles();
  }

  ngOnInit(): void {
    this.vehicleService.getVehicles.pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
