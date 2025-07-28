import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { UserserviceService } from '../../../core/services/userservice.service';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { error } from 'node:console';

@Component({
  selector: 'app-essaie3',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './essaie3.component.html',
  styleUrl: './essaie3.component.css'
})
export class Essaie3Component {
  pdfurl: SafeUrl | undefined ; 
  PdfselenUrl : SafeUrl| undefined ;
  Pdfjemter : SafeUrl| undefined ;
  resultat:any;
  notificationMessage: string = '';
  showNotification: boolean = false;
  notificationClass: string = '';
  hideNotification() {
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
    }, 3000); // Par exemple, masquer après 3 secondes
  }
  constructor(private uploadService:UserserviceService, private a:PipelineserviceService, private router:Router){

  }

  downloadPdfjunit() {
    this.uploadService.junitpdf().subscribe(
      (safeUrl: SafeUrl) => {
        this.pdfurl = safeUrl;
        this.notificationMessage = 'Parfait!';
        this.showNotification = true;
        this.notificationClass = 'notification-success';
        this.hideNotification();
      },
      error => {
        console.error('Erreur lors du téléchargement du PDF', error);
        this.notificationMessage = 'PDF JUnit n\'est pas encore generee';
        this.showNotification = true;
        this.notificationClass = 'notification-error';
        this.hideNotification();
      }
    );
  }
   
  closePdf() {
    this.pdfurl = "";
}




seleniumPDF() {
  this.uploadService.seleniumpdf().subscribe(
    (safeUrl: SafeUrl) => {
      this.PdfselenUrl = safeUrl;
      this.notificationMessage = 'Parfait!';
      this.showNotification = true;
      this.notificationClass = 'notification-success';
      this.hideNotification();
    },
    error => {
      console.error('Erreur lors du téléchargement du PDF', error);
      this.notificationMessage = 'PDF Selenium n\'est pas encore generee';
      this.showNotification = true;
      this.notificationClass = 'notification-error';
      this.hideNotification();
    }
  );
}


  closePdf2() {
    this.PdfselenUrl= "";
  }
  
  jmeterpdf() {
    this.uploadService.jmeterpdf().subscribe(
      (safeUrl: SafeUrl) => {
        this.Pdfjemter = safeUrl;
        this.notificationMessage = 'Parfait!';
        this.showNotification = true;
        this.notificationClass = 'notification-success';
        this.hideNotification();
      },
      error => {
        console.error('Erreur lors du téléchargement du PDF', error);
        this.notificationMessage = ' PDF JMeter n\'est pas encore generee ';
        this.showNotification = true;
        this.notificationClass = 'notification-error';
        this.hideNotification();
      }
    );
  }
    
  closePdf1() {
    this.Pdfjemter = "";
  }
  
    


  analysecode(){
    this.a.analyse().subscribe(data=>{this.resultat=data;
      this.notificationMessage = 'Parfait!';
      this.showNotification = true;
      this.notificationClass = 'notification-success';
      this.hideNotification();
    },
  error=>{
   // this.notificationMessage = '';
    //this.showNotification = true;
    //this.notificationClass = 'notification-error';
    //this.hideNotification();
  }

  );
}
  
  downloadjarfile()
 {
  this.a.jarfile().subscribe(data=>{this.resultat=data;
    this.notificationMessage = 'Parfait!';
      this.showNotification = true;
      this.notificationClass = 'notification-success';
      this.hideNotification();
   
  },
error=>{
  //this.notificationMessage = 'le fichier .jar n s\'est pas touvee ';
  //this.showNotification = true;
  //this.notificationClass = 'notification-error';
  //this.hideNotification();

});
 }


}
