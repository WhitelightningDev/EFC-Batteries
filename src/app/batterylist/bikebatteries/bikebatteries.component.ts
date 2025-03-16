import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { BikeListService } from '../../services/bikelist.service';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

@Component({
  selector: 'app-bikebatteries',
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule], // <-- Add FormsModule here
  templateUrl: './bikebatteries.component.html',
  styleUrls: ['./bikebatteries.component.css']
})
export class BikebatteriesComponent implements OnInit {
  selectedBatteryType: string = '';
  bikes: string[] = [];
  selectedBike: string = '';
  userName: string = '';
  userEmail: string = '';

  constructor(private bikeListService: BikeListService) {}

  ngOnInit() {
    // Fetch the list of bikes from the service
    this.bikes = this.bikeListService.getBikes();
  }

  onSubmit() {
    // Handle form submission, e.g., logging the form data or sending it to an API
    const formData = {
      name: this.userName,
      email: this.userEmail,
      bike: this.selectedBike
    };

    console.log('Form submitted:', formData);
    // Optionally send form data to a backend service via HTTP
  }
}
