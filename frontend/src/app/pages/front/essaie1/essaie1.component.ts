import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { UserserviceService } from '../../../core/services/userservice.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { SelenuimparamsComponent } from '../selenuimparams/selenuimparams.component';
import { SafeUrl } from '@angular/platform-browser';
import { PipeParams } from '../../../core/model/PipeParams';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';

@Component({
  selector: 'app-essaie1',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,SelenuimparamsComponent],
  templateUrl: './essaie1.component.html',
  styleUrl: './essaie1.component.css'
})
export class Essaie1Component {
  @ViewChild(SelenuimparamsComponent) selen!:SelenuimparamsComponent;

  title = 'File-Upload-Save';
  selectedFiles: FileList | null = null;
  currentFileUpload: File | null = null;
  progress: { percentage: number } = { percentage: 0 };
  notificationMessage: string = '';
  showNotification: boolean = false;
  notificationClass: string = '';
  hideNotification() {
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
    }, 3300); // Par exemple, masquer après 3 secondes
  }
  

  pipelineParams:any;


  selenuimyes: boolean = false ;
  selenuimno: boolean = false ;
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
   

 
  
  constructor(private uploadService: UserserviceService, private b:PipelineserviceService, private router:Router) { 

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

  updateTargetStage28(): void {
    if (this.selen && this.selen.endpoint) {
      this.pipeParams.targetstage28 = this.selen.endpoint;
    }
  }

  updateTargetStage29(): void {
    if (this.selen && this.selen.element) {
      this.pipeParams.targetstage29 = this.selen.element;
    }
  }

  updateTargetStage30(): void {
    if (this.selen && this.selen.classn) {
      this.pipeParams.targetstage30 = this.selen.classn;
    }
  }

  selenuimfunction(){
   
    this.updateTargetStage28();
    this.updateTargetStage29();
    this.updateTargetStage30();


  this.b.Selenuim(
    { 
      targetstage1: '',
      targetstage2: '',
      targetstage3: '',
      targetstage4: '',
      targetstage5:'',
      targetstage6: '',
      targetstage7: '',
      targetstage8: '',
      targetstage9:'',
      targetstage10:'',
      targetstage11:'',
      targetstage12:'',
      targetstage13:'',
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

      targetstage28:this.pipeParams.targetstage28,
      targetstage29:this.pipeParams.targetstage29,
      targetstage30:this.pipeParams.targetstage30
    }
  ).subscribe(   () => {
    console.log('Pipeline triggered successfully');
    this.notificationMessage = 'Lancement de vos tests ';
    this.showNotification = true;
    this.notificationClass = 'notification-success';
    this.hideNotification();
    this.notificationMessage = 'Consultez Resultats dans quelques secondes';
    this.showNotification = true;
    this.notificationClass = 'notification-success';
    this.hideNotification();
},
async (error) => {
   // console.error('Error triggering pipeline:', error);
   this.notificationMessage = 'Lancement de vos tests';
    this.showNotification = true;
    this.notificationClass = 'notification-success';
    this.hideNotification();
    await this.delay(3800)
    this.notificationMessage = 'Consultez Resultats dans quelques secondes ';
    this.showNotification = true;
    this.notificationClass = 'notification-success';
    this.hideNotification();
}
); 
}
delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  
  

}
