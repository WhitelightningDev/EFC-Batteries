import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { TruckBatteryService } from '../../services/truckbattery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-truckbatteries',
  imports: [MaterialModule, CommonModule],
  templateUrl: './truckbatteries.component.html',
  styleUrl: './truckbatteries.component.css'
})
export class TruckbatteriesComponent implements OnInit {


    batterylist: any[] = [];
      constructor(private batteryService: TruckBatteryService) { }


    ngOnInit(): void {
      this.batterylist = this.batteryService.getBatteryData();
    }

}
