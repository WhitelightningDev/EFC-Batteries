import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bikebatteries',
  imports: [MaterialModule, CommonModule],
  templateUrl: './bikebatteries.component.html',
  styleUrl: './bikebatteries.component.css'
})
export class BikebatteriesComponent {

}
