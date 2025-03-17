import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Form variables
  name: string = '';
  email: string = '';
  service: string = '';
  message: string = '';

  // Method to open the maps (already in your code)
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

  // Method to send the form data to WhatsApp
  sendWhatsApp(): void {
    const phoneNumber = '+27760606376'; // Target WhatsApp number
    const message = `*Name:* ${this.name}%0A*Email:* ${this.email}%0A*Service:* ${this.service}%0A*Message:* ${this.message}`;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
  }
}
