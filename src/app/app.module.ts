import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleService } from './vehicle/vehicle.service';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatIconModule, MatMenuModule,
  MatSelectModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

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
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent
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
