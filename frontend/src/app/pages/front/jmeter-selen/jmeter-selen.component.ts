import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { JmeterparamsComponent } from '../jmeterparams/jmeterparams.component';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelenuimparamsComponent } from '../selenuimparams/selenuimparams.component';
import { PipeParams } from '../../../core/model/PipeParams';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';

@Component({
  selector: 'app-jmeter-selen',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,JmeterparamsComponent,NgbModule,NgbModalModule,SelenuimparamsComponent],
  templateUrl: './jmeter-selen.component.html',
  styleUrl: './jmeter-selen.component.css'
})
export class JmeterSelenComponent {



  @ViewChild(JmeterparamsComponent) jmeter!: JmeterparamsComponent;
  @ViewChild(SelenuimparamsComponent) selen!:SelenuimparamsComponent;

  pipelineParams:any;
  junityes: boolean = false ;
  junitno: boolean = false ;

  jmeteryes: boolean = false ;

  jmeterno: boolean = false ;
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
   


  constructor(private b:PipelineserviceService, private router:Router, private modalservice:NgbModal) {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras.state) {
      const state = currentNavigation.extras.state;
      if (state["pipelineParams"]) {
        this.pipelineParams = state["pipelineParams"];
        console.log('Pipeline Params in testcomponent:', this.pipelineParams);
      }
    }
 
  

  }
  

 

 /* updateTargetStage11(): void {

    if (this.junityes) {
      this.pipeParams.targetstage11="junit";
    } 
    
  }*/
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
},
(error) => {
    console.error('Error triggering pipeline:', error);
}
); 
}





jmeterpipfunc(){
  
  this.updateTargetStage12();
  this.updateTargetStage23();
  this.updateTargetStage24();
  this.updateTargetStage25();
  this.updateTargetStage26();
  this.updateTargetStage27();
  this.updateTargetStage28();


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
  console.log('Pipeline triggered successfully');
},
(error) => {
  console.error('Error triggering pipeline:', error);
}
); 
}


jmeterfunction()
{
  this.b.jmeter().subscribe(data=>{this.resultat=data;});
}






}
