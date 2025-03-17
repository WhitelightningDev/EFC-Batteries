import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-freebatterycheck',
  imports: [MaterialModule, FormsModule],
  templateUrl: './freebatterycheck.component.html',
  styleUrls: ['./freebatterycheck.component.css']
})
export class FreebatterycheckComponent {

  // Form variables
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  // Method to send the form data to WhatsApp
  sendWhatsApp(): void {
    const phoneNumber = '+27760606376'; // Target WhatsApp number

    // If the message is empty, set a default message
    const finalMessage = this.message.trim() === ''
      ? 'I am requesting a free battery check'
      : this.message;

    // Format the WhatsApp message
    const formattedMessage = `*Full Name:* ${this.name}%0A*Email Address:* ${this.email}%0A*Phone Number:* ${this.phone}%0A*Message:* ${finalMessage}`;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
  }
}
