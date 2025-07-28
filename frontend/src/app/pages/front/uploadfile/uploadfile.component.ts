import { Component } from '@angular/core';
import { UserserviceService } from '../../../core/services/userservice.service';
import { HttpResponse,HttpEventType  } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SafeUrl } from '@angular/platform-browser';
import { error } from 'console';

@Component({
  selector: 'app-uploadfile',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './uploadfile.component.html',
  styleUrl: './uploadfile.component.css'
})
export class UploadfileComponent {

  title = 'File-Upload-Save';
  selectedFiles: FileList | null = null;
  currentFileUpload: File | null = null;
  progress: { percentage: number } = { percentage: 0 };
  //pdfData:any;
  //pdfUrl: SafeUrl | undefined;
  pdfurl: SafeUrl | undefined ; 
  PdfselenUrl : SafeUrl| undefined ;
  Pdfjemter : SafeUrl| undefined ; 

  constructor(private uploadService: UserserviceService) { }

  /*onDownload() {
    this.uploadService.downloadFile().subscribe((data: Blob) => {
      const downloadURL = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'filetest.pdf';
      link.click();
    }, error => {
      console.error('Download Failed', error);
    });
  }*/
  

  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;
    if (this.selectedFiles) {
      this.currentFileUpload = this.selectedFiles.item(0);
      if (this.currentFileUpload) {
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            if (event.total) {
              this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
          } else if (event instanceof HttpResponse) {
            alert('File Successfully Uploaded');
          }
          this.selectedFiles = null;
        });
      }
    }
  }
     
  /*
  //jmeter apartir de file path 
  downloadPdf() {
    this.uploadService.downloadPdf().subscribe(
      (safeUrl: SafeUrl) => {
        this.pdfUrl = safeUrl;
      },
      error => {
        console.error('Erreur lors du téléchargement du PDF', error);
      }
    );
  }
*/
  downloadPdfjunit() {
    this.uploadService.junitpdf().subscribe(
      (safeUrl: SafeUrl) => {
        this.pdfurl = safeUrl;
      },
      error => {
        console.error('Erreur lors du téléchargement du PDF', error);
      }
    );
  }

  seleniumPDF(){
    this.uploadService.seleniumpdf().subscribe(
      (SafeUrl: SafeUrl)=>{
        this.PdfselenUrl=SafeUrl;
      },
      error => {
        console.error('Erreur lors du téléchargement du PDF', error);
      }
    );
  }

  jmeterpdf(){
    this.uploadService.jmeterpdf().subscribe(
      (SafeUrl: SafeUrl)=>{
        this.Pdfjemter=SafeUrl;
      },
      error => {
        console.error('Erreur lors du téléchargement du PDF', error)
      }
    );
  }

 

 

}
