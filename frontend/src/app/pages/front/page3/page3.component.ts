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

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule,ForfunComponent,MatMenuModule,MatIconModule,NavbarComponent,PortalModule],

  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  @ViewChild(ForfunComponent) forfun!: ForfunComponent;

  isCheckedYess: boolean = false; // Pour la case "Yes" de dockerfile 
  isCheckedNoo: boolean = false;
  isCheckedYes: boolean = false; // Pour la case "Yes" de dockerfile 
  isCheckedNo: boolean = false;
  deployyes: boolean=false;
  deployno: boolean=false;
  bdd1:any;
  bdd2:any;
  resultat:any;
  db:string ="";
  /*@Input() prop1: string="";
  @Input() prop2: string="";
  @Input() prop3: string="";
  @Input() prop4: string="";
  @Input() prop5: string="";*/
  dockerImageName: string="";



  selectedOption1: string = '';
  selectedOption2: string = '';
  selectedOption3: string = '';
  selectedOption4: string = '';
  params: any;
  pipelineParams:any;

  pipeParams: PipeParams = {
    
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

  constructor(private b:PipelineserviceService, private router:Router) {
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
  
  updateTargetStage7(): void {
    if (this.selectedOption4 !== undefined && this.selectedOption4.trim() !== '') {
        this.pipeParams.targetstage7 = Base64.encode(this.dockerfilegeneratefront);
    } 
  }
  /*updateTargetStage9(): void {

    if (this.isCheckedYes) {
      this.pipeParams.targetstage9="MySql";
    } 
   // console.log()
    
  }
  */
 /* updateTargetStage10(): void {

    if (this.isCheckedNo) {
      this.pipeParams.targetstage10="MongoDB";
    } 
    
  }*/

  updateTargetStage9(): void {
    if (this.db !== null ) {
      this.pipeParams.targetstage9 = this.db;
    } else {
      this.pipeParams.targetstage9 = ""; // Réinitialisez targetstage4 à une chaîne vide si this.comment est null ou vide
    }
  }
  updateTargetStage14(): void {

    if (this.deployyes) {
      this.pipeParams.targetstage14="deploy";
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

  



  triggerPipeline() {
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
   
   /* this.b.triggerPipeline({
        targetstage1: this.params.targetstage1,
        targetstage2: this.params.targetstage2,
        targetstage3: this.params.targetstage3,
        targetstage4: this.params.targetstage4,
        targetstage5: this.params.targetstage5,
        targetstage6: this.params.targetstage6,
        targetstage7: this.pipeParams.targetstage7,
        targetstage8: this.params.targetstage8,
        targetstage9:this.pipeParams.targetstage9,
        targetstage10:this.pipeParams.targetstage10


    }).subscribe(
        () => {
            console.log('Pipeline triggered successfully');
        },
        (error) => {
            console.error('Error triggering pipeline:', error);
        }
    );  */
}








  





}
