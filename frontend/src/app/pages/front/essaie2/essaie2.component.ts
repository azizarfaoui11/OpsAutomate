import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserserviceService } from '../../../core/services/userservice.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { SafeUrl } from '@angular/platform-browser';
import { PipeParams } from '../../../core/model/PipeParams';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';

@Component({
  selector: 'app-essaie2',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './essaie2.component.html',
  styleUrl: './essaie2.component.css'
})
export class Essaie2Component {
  title = 'File-Upload-Save';
  selectedFiles: FileList | null = null;
  currentFileUpload: File | null = null;
  progress: { percentage: number } = { percentage: 0 };

  pipelineParams:any;
  junityes: boolean = false ;
  junitno: boolean = false ;
  isChecked:boolean=false;
  isCheckedd:boolean=false;
  notificationMessage: string = '';
  showNotification: boolean = false;
  notificationClass: string = '';
  hideNotification() {
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
    }, 3300); // Par exemple, masquer après 3 secondes
  }


  
  pipeParams: PipeParams = {
    targetstage1:"",
    targetstage2:"",
    targetstage3:"",
    targetstage5:"",
    targetstage6:"",
    targetstage7:"",
    targetstage8:"",
    targetstage9:"",
    targetstage10:"",
    targetstage11:"",
    targetstage12:"",
    targetstage13:"",
    targetstage14:"",
    targetstage15:"",
    targetstage16:"",
    targetstage17:"",
    targetstage18:"",
    targetstage19:"",
    targetstage20:"",
    targetstage21:"",
    targetstage23:"",
    targetstage24:"",
    targetstage25:0,
    targetstage26:0,
    targetstage27:0,
    targetstage28:"",
    targetstage29:"",
    targetstage30:""
}
   ;
   resultat:any;
   


  
  


 
  
  constructor(private uploadService: UserserviceService,private b:PipelineserviceService, private router:Router,) { 
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras.state) {
      const state = currentNavigation.extras.state;
      if (state["pipelineParams"]) {
        this.pipelineParams = state["pipelineParams"];
        console.log('Pipeline Params in testcomponent:', this.pipelineParams);
      }
    }
  }


  
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

  
  triggerPipeline() {
    
    this.updateTargetStage11();   
    this.updateTargetStage3();
    this.b.sonarandjunit({
        targetstage1: "",
        targetstage2: "",
        targetstage3: this.pipeParams.targetstage3,
        targetstage4: "",
        targetstage5: "",
        targetstage6: "",
        targetstage7: "",
        targetstage8: "",
        targetstage9:"",
        targetstage10:"",
        targetstage11: this.pipeParams.targetstage11,
        targetstage14:'',
        targetstage15:'',
        targetstage16:'',
        targetstage17:'',
        targetstage18:'',
        targetstage19:'',
        targetstage20:'',
        targetstage21:'',
        targetstage22:'',
        targetstage23:'',
        targetstage24:'',
        targetstage25:0,
        targetstage26:0,
        targetstage27:0,
        targetstage28:'',
        targetstage29:'',
        targetstage30:''
        
    }).subscribe(
        () => {
            //console.log('Pipeline triggered successfully');
            this.notificationMessage = 'Code Quality  en cours d\'execution';

            this.showNotification = true;
            this.notificationClass = 'notification-success';
            this.hideNotification();
            this.notificationMessage = 'Test Unitaire en cours d\'execution';

            this.showNotification = true;
            this.notificationClass = 'notification-success';
            this.hideNotification();
            this.notificationMessage = 'Acceder a Resultats en quelques secondes';
            this.showNotification = true;
            this.notificationClass = 'notification-a';
            this.hideNotification();
        },
        async(error) => {
           // console.error('Error triggering pipeline:', error);
           this.notificationMessage = 'Code Quality  en cours d\'execution';
    this.showNotification = true;
    this.notificationClass = 'notification-success';
    this.hideNotification();
    await this.delay(3800)
    this.notificationMessage = 'Test Unitaire en cours d\'execution';
    this.showNotification = true;
    this.notificationClass = 'notification-success';
    this.hideNotification();
    await this.delay(3800)
    this.notificationMessage = 'Acceder a Resultats en quelques secondes ';
    this.showNotification = true;
    this.notificationClass = 'notification-a';
    this.hideNotification();
        }
    );  
}
  

updateTargetStage3(): void {
  if (this.isChecked) {
    this.pipeParams.targetstage3 = "sonarqube";
  } else {
    // Vous pouvez également gérer le cas où le checkbox est décoché, si nécessaire
    this.pipeParams.targetstage3 = ""; // ou une autre valeur par défaut
  }
}

updateTargetStage11(): void {
  if (this.isCheckedd) {
    this.pipeParams.targetstage11 = "junit";
  } else {
    // Vous pouvez également gérer le cas où le checkbox est décoché, si nécessaire
    this.pipelineParams.targetstage11 = ""; // ou une autre valeur par défaut
  }
}
delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
}
