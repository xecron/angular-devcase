import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleService } from './vehicle/vehicle.service';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './utils/filter.pipe';
import { DeduplicatePipe } from './utils/deduplicate.pipe';
import { SpreadPipe } from './utils/spread.pipe';

const materialModules = [
  MatButtonModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatMenuModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    FilterPipe,
    DeduplicatePipe,
    SpreadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
    HttpClientModule,
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
