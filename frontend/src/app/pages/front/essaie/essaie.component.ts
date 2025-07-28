import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SelenuimparamsComponent } from '../selenuimparams/selenuimparams.component';
import { JmeterparamsComponent } from '../jmeterparams/jmeterparams.component';
import { UserserviceService } from '../../../core/services/userservice.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { SafeUrl } from '@angular/platform-browser';
import { PipeParams } from '../../../core/model/PipeParams';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';

@Component({
  selector: 'app-essaie',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet,SelenuimparamsComponent,JmeterparamsComponent],
  templateUrl: './essaie.component.html',
  styleUrl: './essaie.component.css'
})
export class EssaieComponent {
  @ViewChild(JmeterparamsComponent) jmeter!: JmeterparamsComponent;

  jmeteryes: boolean = false ;

  jmeterno: boolean = false ;
  pipelineParams:any;
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

   constructor(private uploadService: UserserviceService, private b : PipelineserviceService,private router:Router) { 
    
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

  updateTargetStage12(): void {

    if (this.jmeteryes) {
      this.pipeParams.targetstage12="jmeter";
    } 
    
  }
  /*updateTargetStage13(): void {

    if (this.selenuimyes) {
      this.pipeParams.targetstage13="selenuim";
    } 

    
  }*/

  updateTargetStage23(): void {
    if (this.jmeter && this.jmeter.methode) {
      this.pipeParams.targetstage23 = this.jmeter.methode;
    }
  }

  updateTargetStage24(): void {
    if (this.jmeter && this.jmeter.path) {
      this.pipeParams.targetstage24 = this.jmeter.path;
    }
  }

  updateTargetStage25(): void {
    if (this.jmeter && this.jmeter.users) {
      this.pipeParams.targetstage25 = this.jmeter.users;
    }
  }

  updateTargetStage26(): void {
    if (this.jmeter && this.jmeter.boucle) {
      this.pipeParams.targetstage26 = this.jmeter.boucle;
    }
  }

  updateTargetStage27(): void {
    if (this.jmeter && this.jmeter.periode) {
      this.pipeParams.targetstage27 = this.jmeter.periode;
    }
  }

  jmeterpipfunc(){
  
    this.updateTargetStage12();
    this.updateTargetStage23();
    this.updateTargetStage24();
    this.updateTargetStage25();
    this.updateTargetStage26();
    this.updateTargetStage27();
    //this.updateTargetStage28();
  
  
  this.b.jmeterpip(
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
      targetstage12:this.pipeParams.targetstage12,
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
      targetstage23:this.pipeParams.targetstage23,
      targetstage24:this.pipeParams.targetstage24,
      targetstage25:this.pipeParams.targetstage25,
      targetstage26:this.pipeParams.targetstage26,
      targetstage27:this.pipeParams.targetstage27,
  
      targetstage28:'',
      targetstage29:'',
      targetstage30:''
    }
  ).subscribe(   () => {
    this.notificationMessage = 'Lancement de vos tests ';
    this.showNotification = true;
    this.notificationClass = 'notification-success';
    this.hideNotification();
    this.notificationMessage = 'Consultez Resultats dans quelques secondes ';
    this.showNotification = true;
    this.notificationClass = 'notification-success';
    this.hideNotification();

    //console.log('Pipeline triggered successfully');
  },
   async (error) => {
    console.error('Error triggering pipeline:', error);
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
