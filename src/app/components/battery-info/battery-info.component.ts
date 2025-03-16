import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-battery-info',
  templateUrl: './battery-info.component.html',
  styleUrls: ['./battery-info.component.css']
})
export class BatteryInfoComponent {
  @Input() batteryType: string = '';
  @Input() batteryDescription: string = '';
}
