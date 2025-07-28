import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PipeParams } from '../../../core/model/PipeParams';
import { Base64 } from 'js-base64';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { ForfunComponent } from '../forfun/forfun.component';
import { StreamPriorityOptions } from 'http2';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import { PortalModule } from '@angular/cdk/portal';
import { JmeterparamsComponent } from '../jmeterparams/jmeterparams.component';
import { PaymentService } from '../../../core/services/payment.service';
import { MongodbmodalComponent } from '../mongodbmodal/mongodbmodal.component';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule,ForfunComponent,MatMenuModule,MatIconModule,NavbarComponent,PortalModule],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  @ViewChild(ForfunComponent) forfun!: ForfunComponent;
  @ViewChild(MongodbmodalComponent) mongo!: MongodbmodalComponent;


  isCheckedYess: boolean = false; // Pour la case "Yes" de dockerfile 
  isCheckedNoo: boolean = false;
  isCheckedYes: boolean = false; // Pour la case "Yes" de dockerfile 
  isCheckedNo: boolean = false;
  deployyes: boolean=false;
  deployno: boolean=false;
  bdd1:any;
  bdd2:any;
  resultat:any;
  result:any;
  db:string ="";
  showSuccessNotification = false;
  showErrorNotification = false;
  showNotification: boolean = false;
  notificationMessage: string = '';
  notificationClass: string = '';
  dockerImageName: string="";



  selectedOption1: string = '';
  selectedOption2: string = '';
  selectedOption3: string = '';
  selectedOption4: string = '';
  params: any;
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
    targetstage22:"",
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
   dockerfilegeneratefront: string = "FROM node:latest as build\n" +
  "WORKDIR /app\n" +
  "COPY package*.json ./\n" +
  "RUN npm install -g @angular/cli\n"+
  "RUN npm install\n"+
  "COPY . .\n" +
  "RUN npm run build\n" +
  "FROM nginx:latest\n" +
  "COPY --from=build /app/dist/* /usr/share/nginx/html/\n" +
  "EXPOSE 80\n" +
  "CMD [\"nginx\", \"-g\", \"daemon off;\"]";

  constructor(private b:PipelineserviceService, private router:Router, private p:PaymentService) {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras.state) {
      const state = currentNavigation.extras.state;
      if (state["pipelineParams"]) {
        this.params = state["pipelineParams"];
        console.log('Pipeline Params in page3:', this.params);
      }
    }
  }
  


  handleCheckboxChange(): void {
    if (!this.isCheckedYess) {
      this.selectedOption1 = '';
      this.selectedOption2 = '';
      this.selectedOption3 = '';
      this.selectedOption4 = ''; // Réinitialisez l'option sélectionnée si la case "Yes" est décochée
      //this.uploadedFile = null; // Réinitialisez le fichier uploadé si la case "Yes" est décochée
  
  
    }
  }
  
 /* updateTargetStage7(): void {
    if (this.selectedOption4 !== undefined && this.selectedOption4.trim() !== '') {
        this.pipeParams.targetstage7 = Base64.encode(this.dockerfilegeneratefront);
    } 
  }*/
    updateTargetStage7(): void {
      if (this.selectedOption4) {
          this.pipeParams.targetstage7 = Base64.encode(this.dockerfilegeneratefront);
      } 
      else {
        this.pipeParams.targetstage7="";
      }
    }


  

  updateTargetStage9(): void {
    if (this.db !== null ) {
      this.pipeParams.targetstage9 = this.db;
    } else {
      this.pipeParams.targetstage9 = ""; // Réinitialisez targetstage4 à une chaîne vide si this.comment est null ou vide
    }
  }
  

  updateTargetStage14(): void {
    if (this.deployyes) {
      this.pipeParams.targetstage14 = "deploy";
    } else {
      // Vous pouvez également gérer le cas où le checkbox est décoché, si nécessaire
      this.pipeParams.targetstage14 = ""; // ou une autre valeur par défaut
    }
  }



  updateTargetStage17(): void {

    if (this.forfun.databaseName) {
      this.pipeParams.targetstage17=this.forfun.databaseName;
    } 
    
  }
  updateTargetStage18(): void {

    if (this.forfun.dataSourceUrl) {
      this.pipeParams.targetstage18=this.forfun.dataSourceUrl;
    } 
    
  } updateTargetStage19(): void {

    if (this.forfun.dataSourceUsername) {
      this.pipeParams.targetstage19=this.forfun.dataSourceUsername;
    } 
    
  } updateTargetStage20(): void {

    if (this.forfun.dataSourcePassword) {
      this.pipeParams.targetstage20=this.forfun.dataSourcePassword;
    } 
    
  } updateTargetStage21(): void {

    if (this.dockerImageName) {
      this.pipeParams.targetstage21=this.dockerImageName;
    } 
    
  }

  

  



  /*triggerPipeline() {
    this.updateTargetStage7();
    this.updateTargetStage9();
    //this.updateTargetStage10();
    this.updateTargetStage14();
    this.updateTargetStage17();
    this.updateTargetStage18();
    this.updateTargetStage19();
    this.updateTargetStage20();
    this.updateTargetStage21();
    const updatedParams = {
      targetstage1:this.params.targetstage1,
      targetstage2:this.params.targetstage2,
      targetstage3:this.params.targetstage3,
      targetstage4:this.params.targetstage4,
    
      targetstage5: this.params.targetstage5,
      targetstage6: this.params.targetstage6,
      targetstage7:this.pipeParams.targetstage7,
      targetstage8: this.params.targetstage8,
      targetstage9: this.pipeParams.targetstage9,
      targetstage10: this.params.targetstage10,
      targetstage14: this.pipeParams.targetstage14,
      targetstage15: this.params.targetstage15,
      targetstage16: this.params.targetstage16,
      targetstage17: this.pipeParams.targetstage17,
      targetstage18: this.pipeParams.targetstage18,
      targetstage19: this.pipeParams.targetstage19,
      targetstage20: this.pipeParams.targetstage20,
      targetstage21: this.pipeParams.targetstage21,
      targetstage22: this.params.targetstage22



    };
    
    console.log('Updated Params:', updatedParams); 
    // Vérifiez ici
    //this.a.setPipelineParams(updatedParams);
    const navigationExtras: NavigationExtras = {
      state: {
        pipelineParams: updatedParams
      }
    };
    this.router.navigate(['/tests'], navigationExtras);
   
   
}*/




 
async triggerPipeline() {
    
  ///this.updateTargetStage11();
  this.updateTargetStage7();
    this.updateTargetStage9();
    //this.updateTargetStage10();
    this.updateTargetStage14();
    this.updateTargetStage17();
    this.updateTargetStage18();
    this.updateTargetStage19();
    this.updateTargetStage20();
    this.updateTargetStage21();

  this.b.triggerPipeline({
      targetstage1: this.params.targetstage1,
      targetstage2: this.params.targetstage2,
      targetstage3: this.params.targetstage3,
      targetstage4: this.params.targetstage4,
      targetstage5: this.params.targetstage5,
      targetstage6: this.params.targetstage6,
      targetstage7:this.pipeParams.targetstage7,
      targetstage8: this.params.targetstage8,
      targetstage9:this.pipeParams.targetstage9,
      targetstage10:this.params.targetstage10,
      targetstage11:this.params.targetstage11,
      //targetstage12:this.pipeParams.targetstage12,
      //targetstage13:this.pipeParams.targetstage13,
      targetstage14:this.pipeParams.targetstage14,
      targetstage15:this.params.targetstage15,
      targetstage16:this.params.targetstage16,
      targetstage17:this.pipeParams.targetstage17,
      targetstage18:this.pipeParams.targetstage18,
      targetstage19:this.pipeParams.targetstage19,
      targetstage20:this.pipeParams.targetstage20,
      targetstage21:this.pipeParams.targetstage21,
      targetstage22:this.params.targetstage22,
      targetstage23:'',
      targetstage24:'',
      targetstage25:0,
      targetstage26:0,
      targetstage27:0,
      targetstage28:'',
      targetstage29:'',
      targetstage30:''

  }).subscribe(
    async () => {
      // Notification 1
      await this.delay(700); // Attendre 2 secondes avant de montrer la deuxième notification

      this.notificationMessage = 'Votre deployment est en cours ';
      this.showNotification = true;
      this.notificationClass = 'notification-success';
      console.log('Pipeline triggered successfully (success case)');
      
      // Masquer Notification 1 après 6 secondes
      setTimeout(() => {
          this.showNotification = false;
      }, 4000);

      // Notification 2
      await this.delay(5000); // Attendre 2 secondes avant de montrer la deuxième notification
      this.notificationMessage = 'Cette opération peut prendre quelques minutes';
      this.showNotification = true;
      this.notificationClass = 'notification-a';
      
      // Masquer Notification 2 après 5 secondes
      setTimeout(() => {
          this.showNotification = false;
      }, 4000); 

      await this.delay(5000); // Attendre 2 secondes avant de montrer la deuxième notification
      this.notificationMessage = 'Cette opération peut prendre quelques minutes';
      this.showNotification = true;
      this.notificationClass = 'notification-a';
      
      // Masquer Notification 2 après 5 secondes
      setTimeout(() => {
          this.showNotification = false;
      }, 4000); 
      await this.delay(5000); // Attendre 2 secondes avant de montrer la deuxième notification

      this.router.navigate(['/ressource']);
    

  },
  async (error) => {
      // Notification 1
      await this.delay(700); // Attendre 1 seconde avant de montrer la deuxième notification

      this.notificationMessage = 'Votre deployment est en cours ';
      this.showNotification = true;
      this.notificationClass = 'notification-success'; // Utiliser une class différente pour les erreurs
     // console.error('Error triggering pipeline:', error);
      
      // Masquer Notification 1 après 6 secondes
      setTimeout(() => {
          this.showNotification = false;
      }, 4000);

      // Notification 2
      await this.delay(5000); // Attendre 1 seconde avant de montrer la deuxième notification
      this.notificationMessage = 'Cette opération peut prendre quelques minutes';
      this.showNotification = true;
      this.notificationClass = 'notification-a'; // Vous pouvez utiliser une autre classe pour différencier les messages
      
      // Masquer Notification 2 après 5 secondes
      setTimeout(() => {
          this.showNotification = false;
      }, 4000); 

      //notification 3 
      await this.delay(5000); // Attendre 1 seconde avant de montrer la deuxième notification
      this.notificationMessage = 'vous serez notifie par email de que l operation termine';
      this.showNotification = true;
      this.notificationClass = 'notification-a'; // Vous pouvez utiliser une autre classe pour différencier les messages
      
      // Masquer Notification 2 après 5 secondes
      setTimeout(() => {
          this.showNotification = false;
      }, 4000); 
      await this.delay(5000); // Attendre 2 secondes avant de montrer la deuxième notification
      this.router.navigate(['/ressource']);

  }
  
  );   
  await this.delay(20000);
  this.sendemail();
}


sendemail()
{
  this.p.sendemaildeploy().
  subscribe(data=>{this.result=data
   console.log(this.result); 
  });
}
 // Fonction de délai
 delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}





}
