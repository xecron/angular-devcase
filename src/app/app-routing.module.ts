import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleComponent} from './vehicle/vehicle.component';


const routes: Routes = [
  // path: '**' for demo purposes only
  { path: '**', component: VehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
