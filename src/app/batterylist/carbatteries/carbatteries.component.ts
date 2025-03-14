import { Component, OnInit, } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { BatteryService } from '../../services/battery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carbatteries',
  imports: [MaterialModule, CommonModule],
  templateUrl: './carbatteries.component.html',
  styleUrl: './carbatteries.component.css'
})
export class CarbatteriesComponent implements OnInit {
  batterylist: any[] = [];
  constructor(private batteryService: BatteryService) { }

  ngOnInit(): void {
   this.batterylist = this.batteryService.getBatteryData();
  }
}
