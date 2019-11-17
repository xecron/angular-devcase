import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/internal/operators';
import { Vehicle } from './vehicle.interface';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  private loading = false;

  public vehicles: Vehicle[] = [];

  public selectedType: string;
  public selectedBrand: string;
  public selectedColor: string;

  // If there is a broken link then we show error image
  public errorImgSrc = '../../assets/blue-screen.jpg';

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
        this.loading = false;
      }
    });
  }

  fetchVehicles(): void {
    this.loading = true;
    this.vehicleService.fetchVehicles();
  }

  resetFilters(): void {
    this.selectedType = null;
    this.selectedBrand = null;
    this.selectedColor = null;
  }

  get vehicleTypes(): string[] {
    return (!this.hasData) ? [] : this.vehicles
      .map((vehicle) => vehicle.type)
      .filter((elem, index, self) => index === self.indexOf(elem));
  }

  get vehicleBrands(): string[] {
    return (!this.hasData) ? [] : this.vehicles
      .map((vehicle) => vehicle.brand)
      .filter((elem, index, self) => index === self.indexOf(elem));
  }

  get vehicleColors(): string[] {
    if (!this.hasData) {
        return [];
    }

    let colors = [];
    this.vehicles.map((vehicle) => {
      colors.push(...vehicle.colors);
    });

    colors = colors.filter((elem, index, self) => index === self.indexOf(elem));
    return colors;
  }

  get hasData(): boolean {
    return !this.loading && this.vehicles.length > 0;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
