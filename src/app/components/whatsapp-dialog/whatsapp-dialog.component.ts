import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../shared/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-dialog',
  imports: [CommonModule, MaterialModule],
  templateUrl: './whatsapp-dialog.component.html',
  styleUrls: ['./whatsapp-dialog.component.css']
})
export class WhatsAppDialogComponent {
  options: string[] = [
    "How much are your batteries?",
    "I want to buy a battery.",
    "Can you give me better options?"
  ];

  constructor(private dialogRef: MatDialogRef<WhatsAppDialogComponent>) {}

  sendMessage(option: string): void {
    this.dialogRef.close(option);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
