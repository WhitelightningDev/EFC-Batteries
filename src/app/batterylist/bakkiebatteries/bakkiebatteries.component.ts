import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { TruckBatteryService } from '../../services/truckbattery.service';

@Component({
  selector: 'app-bakkiebatteries',
  imports: [MaterialModule, CommonModule],
  templateUrl: './bakkiebatteries.component.html',
  styleUrl: './bakkiebatteries.component.css'
})
export class BakkiebatteriesComponent implements OnInit {

  batterylist: any[] = [];
    constructor(private batteryService: TruckBatteryService) { }


  ngOnInit(): void {
    this.batterylist = this.batteryService.getBatteryData();
  }

}
