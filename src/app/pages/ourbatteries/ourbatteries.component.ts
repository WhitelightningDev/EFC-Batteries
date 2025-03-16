import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MaterialModule } from '../../shared/material/material.module';

declare var bootstrap: any; // Ensure Bootstrap modal functionality is accessible

@Component({
  selector: 'app-ourbatteries',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './ourbatteries.component.html',
  styleUrls: ['./ourbatteries.component.css']
})
export class OurbatteriesComponent {
  selectedBatteryType: string = '';
  selectedBatteryDescription: SafeHtml = ''; // SafeHtml type for the sanitized HTML

  constructor(private sanitizer: DomSanitizer) {}

  openModal(type: string) {
    const batteryData: Record<string, string> = {
      'Platinum Battery': `
        <strong>For High-Performance & Luxury Vehicles</strong><br>
        If you drive a luxury car, a high-performance vehicle, or a car with advanced electrical systems, a Platinum Battery is the best choice. These batteries offer exceptional durability and longevity, making them ideal for vehicles with many electronic features, powerful engines, or extreme climate conditions.<br><br>
        <strong>Best for:</strong><br>
        ✅ High-end sedans (e.g., BMW, Mercedes-Benz, Audi)<br>
        ✅ Performance cars (e.g., sports cars, muscle cars)<br>
        ✅ Vehicles with premium sound systems, heated seats, and other power-hungry features
      `,

      'Gold Battery': `
        <strong>For Everyday Vehicles & Reliable Performance</strong><br>
        If you need a dependable battery for daily commuting, a Gold Battery is an excellent choice. It provides strong starting power and is designed for reliable long-term use in standard passenger vehicles. This is the perfect balance between performance and affordability.<br><br>
        <strong>Best for:</strong><br>
        ✅ Everyday sedans, hatchbacks, and compact SUVs (e.g., Toyota Corolla, VW Polo, Ford Fiesta)<br>
        ✅ Light-duty work vehicles<br>
        ✅ Drivers who need a reliable, cost-effective solution
      `,

      'EFB Battery': `
        <strong>For Start-Stop Vehicles</strong><br>
        If your car has start-stop technology (where the engine turns off at traffic lights to save fuel), then an EFB Battery is required. EFBs are built to handle the frequent stop-start cycles of modern fuel-efficient vehicles. They last longer than standard flooded batteries and recharge quickly.<br><br>
        <strong>Best for:</strong><br>
        ✅ Vehicles with start-stop technology (e.g., VW Golf, Ford Focus, Renault Clio)<br>
        ✅ Taxis and delivery vehicles that stop and start frequently<br>
        ✅ Mid-range vehicles with moderate power demands
      `,

      'AGM Battery': `
        <strong>For Start-Stop & High-Tech Vehicles</strong><br>
        If your car has advanced start-stop systems, regenerative braking, or high electrical demands, an AGM Battery is essential. These batteries provide faster charging, deep cycling capabilities, and superior vibration resistance, making them perfect for high-tech and hybrid vehicles.<br><br>
        <strong>Best for:</strong><br>
        ✅ Luxury & performance vehicles with advanced electrical systems (e.g., Range Rover, Audi Q7, Porsche)<br>
        ✅ Hybrid & electric cars with heavy battery usage<br>
        ✅ 4x4s and off-road vehicles requiring extreme durability
      `
    };

    this.selectedBatteryType = type;
    this.selectedBatteryDescription = this.sanitizer.bypassSecurityTrustHtml(batteryData[type] || 'Battery information not available');

    // Open Bootstrap Modal
    const modal = new bootstrap.Modal(document.getElementById('batteryModal')!);
    modal.show();
  }
}
