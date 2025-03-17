import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { WhatsAppDialogComponent } from '../whatsapp-dialog/whatsapp-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fab',
  imports: [MaterialModule],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.css'
})
export class FabComponent {
  constructor(private dialog: MatDialog) { }

  openDialog(): void{
    const dialogRef = this.dialog.open(WhatsAppDialogComponent, {
      width: "400px",
    });
    dialogRef.afterClosed().subscribe(selectedMessage => {
      if(selectedMessage){
        const phoneNumber = '+27760606376';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(selectedMessage)}`;
        window.open(whatsappUrl, '_blank');
      }
    })
  }


}
