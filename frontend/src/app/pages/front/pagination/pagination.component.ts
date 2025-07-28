import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PipelineParams } from '../../../core/model/pipelineParams';
import { PipelineComponent } from '../pipeline/pipeline.component';
import { PipeParams } from '../../../core/model/PipeParams';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { Base64 } from 'js-base64';
import { NavbarComponent } from '../navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule,NavbarComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
  isCheckedYes: boolean = false; // Pour la case "Yes"

  isCheckedYess: boolean = false; // Pour la case "Yes" de artifact build 
  isCheckedNoo: boolean = false;
  isCheckedYesss: boolean = false; // Pour la case "Yes" de dockerfile 
  isCheckedNooo: boolean = false;
  selectedOption1: string = '';
  selectedOption2: string = '';
  selectedOption3: string = '';
  selectedOption4: string = '';
  dockerUsername: string='';
  dockerPassword: string='';
  dockerImageName: string='';




  uploadedFile: File | null = null; // Variable pour stocker le fichier uploadé
  downloadartifactSelected:boolean=false;

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
  
  pipelineParams: any;
  dockerfilePath: any;
  dockerfilegenerate: string ="FROM openjdk:8\n" +
  "ARG JAR_FILE=target/*.jar\n" +
  "COPY ${JAR_FILE} myapp.jar\n" +
  "ENTRYPOINT [\"java\",\"-jar\",\"/myapp.jar\"]";
  
  resultat:any;

  //nexus:any;
//docker:any;


  constructor(private b:PipelineserviceService, private router:Router) {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras.state) {
      const state = currentNavigation.extras.state;
      if (state["pipelineParams"]) {
        this.pipelineParams = state["pipelineParams"];
        console.log('Pipeline Params in PaginationComponent:', this.pipelineParams);
      }
    }
 
  

  }

  

 /* updateTargetStage5(): void {

    if (this.isCheckedYess) {
      this.pipeParams.targetstage5="nexus";
    } 
    
  }*/

    updateTargetStage6(): void {
      if (this.isCheckedYesss) {
        this.pipeParams.targetstage6 = "docker";
      } else {
        // Vous pouvez également gérer le cas où le checkbox est décoché, si nécessaire
        this.pipeParams.targetstage6 = ""; // ou une autre valeur par défaut
      }
    }
 /* updateTargetStage6(): void {

    if (this.isCheckedYesss) {
      this.pipeParams.targetstage6="docker";
    } 
    
  }
*/
   updateTargetStage5(): void {
    if (this.isCheckedYess) {
      this.pipeParams.targetstage5 = "nexus";
    } else {
      // Vous pouvez également gérer le cas où le checkbox est décoché, si nécessaire
      this.pipeParams.targetstage5 = ""; // ou une autre valeur par défaut
    }
  }

  updateTargetStage8(): void {
    if (this.selectedOption4) {
        this.pipeParams.targetstage8 = Base64.encode(this.dockerfilegenerate);
    } 
    else {
      this.pipeParams.targetstage8="";
    }
  }
 

/*updateTargetStage8(): void {
  if (this.selectedOption4 !== undefined && this.selectedOption4.trim() !== '') {
      this.pipeParams.targetstage8 = Base64.encode(this.dockerfilegenerate);
  } 
}*/
updateTargetStage10(): void {
  if (this.dockerUsername !== null ) {
    this.pipeParams.targetstage10 = this.dockerUsername;
  } else {
    this.pipeParams.targetstage10 = ""; // Réinitialisez targetstage4 à une chaîne vide si this.comment est null ou vide
  }
}
updateTargetStage15(): void {
  if (this.dockerPassword !== null ) {
    this.pipeParams.targetstage15 = this.dockerPassword;
  } else {
    this.pipeParams.targetstage15= ""; // Réinitialisez targetstage4 à une chaîne vide si this.comment est null ou vide
  }
}
updateTargetStage16(): void {
  if (this.dockerImageName !== null ) {
    this.pipeParams.targetstage16 = this.dockerImageName;
  } else {
    this.pipeParams.targetstage16 = ""; // Réinitialisez targetstage4 à une chaîne vide si this.comment est null ou vide
  }
}

 // Dans PaginationComponent

 ngOnInit(): void {}
 
 /*triggerPipeline() {
    this.updateTargetStage5();
    this.updateTargetStage6();
    //this.updateTargetStage7();
    this.updateTargetStage8();
   
    this.b.triggerPipeline({
        targetstage1: this.pipelineParams.targetstage1,
        targetstage2: this.pipelineParams.targetstage2,
        targetstage3: this.pipelineParams.targetstage3,
        targetstage4: this.pipelineParams.targetstage4,
        targetstage5: this.pipeParams.targetstage5,
        targetstage6: this.pipeParams.targetstage6,
        targetstage7: this.pipeParams.targetstage7,
        targetstage8: this.pipeParams.targetstage8,


    }).subscribe(
        () => {
            console.log('Pipeline triggered successfully');
        },
        (error) => {
            console.error('Error triggering pipeline:', error);
        }
    );  
}*/
triggerPipeline() {
  this.updateTargetStage5();
  this.updateTargetStage6();
  this.updateTargetStage8();
  this.updateTargetStage10();
  this.updateTargetStage15();
  this.updateTargetStage16();

const updatedParams = {
  targetstage1:this.pipelineParams.targetstage1,
  targetstage2:this.pipelineParams.targetstage2,
  targetstage3:this.pipelineParams.targetstage3,
  targetstage4:this.pipelineParams.targetstage4,

  targetstage5: this.pipeParams.targetstage5,
  targetstage6: this.pipeParams.targetstage6,
  targetstage8: this.pipeParams.targetstage8,
  targetstage10: this.pipeParams.targetstage10,
  targetstage15: this.pipeParams.targetstage15,
  targetstage16: this.pipeParams.targetstage16,
  targetstage22: this.pipelineParams.targetstage22
};

console.log('Updated Params:', updatedParams); 
// Vérifiez ici
//this.a.setPipelineParams(updatedParams);
const navigationExtras: NavigationExtras = {
  state: {
    pipelineParams: updatedParams
  }
};
this.router.navigate(['/page3'], navigationExtras);

}

  
 downloadjarfile()
 {
  this.b.jarfile().subscribe(data=>{this.resultat=data;});
 }


 

  handleCheckboxChange(): void {
    if (!this.isCheckedYes) {
      this.selectedOption1 = '';
      this.selectedOption2 = '';
      this.selectedOption3 = '';
      this.selectedOption4 = ''; // Réinitialisez l'option sélectionnée si la case "Yes" est décochée
      this.uploadedFile = null; // Réinitialisez le fichier uploadé si la case "Yes" est décochée
  
  
    }
  }
  handleFileInput(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      const selectedFile: File = files[0];
      // Vérifiez si un fichier est sélectionné
      if (selectedFile != null) {
        // Obtenez le chemin absolu du fichier sélectionné
        this.dockerfilePath = selectedFile.name;
        console.log("Fichier Dockerfile sélectionné : " + this.dockerfilePath);
        // Vous pouvez maintenant  utiliser this.dockerfilePath dans votre logique métier ou l'envoyer au serveur
      }
    }
  }
   /*validerChemin() {
    var cheminInput = document.getElementById("cheminFichier");
    if (cheminInput !== null && cheminInput instanceof HTMLInputElement) {
        var chemin = cheminInput.value;
        console.log("Chemin saisi par l'utilisateur : " + chemin);
        // Vous pouvez maintenant utiliser la variable 'chemin' dans votre logique métier
    } else {
        console.error("Élément avec l'ID 'cheminFichier' non trouvé ou n'est pas un élément <input>.");
    }
}*/




    

     










 }
