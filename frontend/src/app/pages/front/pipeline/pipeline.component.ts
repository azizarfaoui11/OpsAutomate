import { Component, OnInit, ViewChild } from '@angular/core';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationExtras, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipelineParams } from '../../../core/model/pipelineParams';
import { RouterModule, Router } from '@angular/router';
import { RecapComponent } from '../recap/recap.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,RecapComponent,MatMenuModule,MatIconModule],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.css',
  providers:[PipelineserviceService]
})
export class PipelineComponent implements OnInit{
  @ViewChild(RecapComponent) recap!: RecapComponent;


  
    //targetstage1 : string= 'clone';
    showLabel: boolean = false;
    comment: string = '';
    commentt:string='';
    commentValue: string = '';
    commentValuee:string='';
    mavenSelected: boolean = false; // Cette variable stockera si Maven est sélectionné
  gradleSelected: boolean = false;
  selectedBuildTool:string="";

  downloadartifactSelected:boolean=false;
  isCheckedYes: boolean = false; // Pour la case "Yes"
  isCheckedNo: boolean = false;
  
  pipelineParams: PipelineParams = {
    targetstage1: "",
    targetstage2: "",
    targetstage3: "",
    targetstage4: "",
    targetstage22:"",
    targetstage23:"",
    targetstage24:"",
    targetstage25:0,
    targetstage26:0,
    targetstage27:0,
    targetstage28:"",
    targetstage29:"",
    targetstage30:""
  };
  resultat:any;
  

 // constructor(private recapComponent: RecapComponent) { }


  constructor (private a:PipelineserviceService, private router:Router){
    
  }

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
    console.log(this.pipelineParams.targetstage1);
    console.log(this.pipelineParams.targetstage2);
    console.log(this.pipelineParams.targetstage3);
    console.log(this.pipelineParams.targetstage4);
    console.log(this.pipelineParams.targetstage22);



  }
  updateTargetStage1(): void {

    if (this.comment!==null) {
      this.pipelineParams.targetstage1 = "clone";
    } 
    
  }
  updateTargetStage22(): void {
    if(this.commentValuee!==null)
    {
      this.pipelineParams.targetstage22=this.commentValuee;
    }
    else {
      this.pipelineParams.targetstage22 = ""; 
    }
  }
  

  /*updateTargetStage2(): void {

    if (this.mavenSelected ) {
      this.pipelineParams.targetstage2 = "build";
    } 
    
  }*/
  updateTargetStage2(): void {
    if (this.selectedBuildTool !== null ) {
      this.pipelineParams.targetstage2 = this.selectedBuildTool;
    } else {
      this.pipelineParams.targetstage2 = ""; // Réinitialisez targetstage4 à une chaîne vide si this.comment est null ou vide
    }
  }
  updateTargetStage3(): void {
    if (this.isCheckedYes) {
      this.pipelineParams.targetstage3 = "sonarqube";
    } 
  }
  
  updateTargetStage4(): void {
    if (this.commentValue !== null ) {
      this.pipelineParams.targetstage4 = this.commentValue;
    } else {
      this.pipelineParams.targetstage4 = ""; // Réinitialisez targetstage4 à une chaîne vide si this.comment est null ou vide
    }
  }

  triggerRecapComponentMethod(): void {
    // Appelez la méthode increaseWidth() de RecapComponent
    this.recap.increaseWidth();
  }
  




      /* triggerPipeline() {

          this.a.triggerPipeline(this.pipelineParams).subscribe(
      () => {
        console.log('Pipeline triggered successfully');
      },
      (error) => {
        console.error('Error triggering pipeline:', error);
      }
    );  
  }*/
//fonctionne tres bien avec la partie 1
  /*triggerPipeline() {
    this.updateTargetStage1();
    this.updateTargetStage2();
    this.updateTargetStage3();
    this.updateTargetStage4();
    this.a.triggerPipeline({
        targetstage1: this.pipelineParams.targetstage1,
        targetstage2: this.pipelineParams.targetstage2,
        targetstage3: this.pipelineParams.targetstage3,
        targetstage4: this.pipelineParams.targetstage4,
        targetstage5: this.pipelineParams.targetstage5,


    }).subscribe(
        () => {
            console.log('Pipeline triggered successfully');
        },
        (error) => {
            console.error('Error triggering pipeline:', error);
        }
    );  
}*/

//pour fonctionner le 2 eme partie 
triggerPipeline() {
  this.updateTargetStage1();
  this.updateTargetStage2();
  this.updateTargetStage3();
  this.updateTargetStage4();
  this.updateTargetStage22();
  
  const updatedParams = {
    targetstage1: this.pipelineParams.targetstage1,
    targetstage2: this.pipelineParams.targetstage2,
    targetstage3: this.pipelineParams.targetstage3,
    targetstage4: this.pipelineParams.targetstage4,
    targetstage22:this.pipelineParams.targetstage22,
  };

  console.log('Updated Params:', updatedParams); // Vérifiez ici
  //this.a.setPipelineParams(updatedParams);
  const navigationExtras: NavigationExtras = {
    state: {
      pipelineParams: updatedParams
    }
  };
  this.router.navigate(['/page2'], navigationExtras);


  
}

analysecode(){
  this.a.analyse().subscribe(data=>{this.resultat=data;});
}







  toggleLabel(): void {
    this.showLabel = !this.showLabel;
  }
   

  saveComment(): void {
    
    this.commentValue=this.comment;
    this.comment = '';
    this.showLabel = false;


}
saveCommentt(): void {
  
  this.commentValuee=this.commentt;
  this.commentt = '';
  this.showLabel = false;


}


handleCheckboxChange(): void {
  if (!this.isCheckedYes) {
    this.isCheckedNo = false; 


  }
}



}
