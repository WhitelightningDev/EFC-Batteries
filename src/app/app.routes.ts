import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarbatteriesComponent } from './batterylist/carbatteries/carbatteries.component';
import { BikebatteriesComponent } from './batterylist/bikebatteries/bikebatteries.component';
import { BakkiebatteriesComponent } from './batterylist/bakkiebatteries/bakkiebatteries.component';
import { TruckbatteriesComponent } from './batterylist/truckbatteries/truckbatteries.component';


export const routes: Routes = [
  // Pages
  {path: "", component: HomeComponent},

  // Batterylistpages
  {path: "carbat", component: CarbatteriesComponent},
  {path: "bikebat", component: BikebatteriesComponent},
  {path: "bakkiebat", component: BakkiebatteriesComponent},
  {path: "truckbat", component: TruckbatteriesComponent}
];
