import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  openMaps(): void {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Check if the device is an iPhone
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      // Open in Apple Maps on iPhone
      window.location.href = "maps://?q=476+Steve+Biko+Rd,+Gezina,+Pretoria,+0084";
    } else if (/android/i.test(userAgent)) {
      // Open in Google Maps on Android
      window.location.href = "https://www.google.com/maps?q=476+Steve+Biko+Rd,+Gezina,+Pretoria,+0084";
    } else {
      // For other devices, fallback to the web link
      window.open("https://www.google.com/maps?q=476+Steve+Biko+Rd,+Gezina,+Pretoria,+0084", "_blank");
    }
  }
}
