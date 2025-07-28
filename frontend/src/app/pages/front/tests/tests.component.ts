import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RecapComponent } from '../recap/recap.component';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { PipeParams } from '../../../core/model/PipeParams';
import { JmeterparamsComponent } from '../jmeterparams/jmeterparams.component';
import { NgbActiveModal, NgbModal,NgbModalModule,NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelenuimparamsComponent } from '../selenuimparams/selenuimparams.component';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,JmeterparamsComponent,NgbModule,NgbModalModule,SelenuimparamsComponent],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {

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
  

 

  updateTargetStage11(): void {

    if (this.junityes) {
      this.pipeParams.targetstage11="junit";
    } 
    
  }
  /*updateTargetStage12(): void {

    if (this.jmeteryes) {
      this.pipeParams.targetstage12="jmeter";
    } 
    
  }
  updateTargetStage13(): void {

    if (this.selenuimyes) {
      this.pipeParams.targetstage13="selenuim";
    } 

    
  }*/

 /* updateTargetStage23(): void {
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
  }*/

    
  triggerPipeline() {
    
    this.updateTargetStage11();
   // this.updateTargetStage12();
    //this.updateTargetStage13();
    //this.updateTargetStage23();
    //this.updateTargetStage24();
    //this.updateTargetStage25();
    //this.updateTargetStage26();
    //this.updateTargetStage27();
    
    //console.log()
       
    
    
   
    this.b.triggerPipeline({
        targetstage1: this.pipelineParams.targetstage1,
        targetstage2: this.pipelineParams.targetstage2,
        targetstage3: this.pipelineParams.targetstage3,
        targetstage4: this.pipelineParams.targetstage4,
        targetstage5: this.pipelineParams.targetstage5,
        targetstage6: this.pipelineParams.targetstage6,
        targetstage7: this.pipelineParams.targetstage7,
        targetstage8: this.pipelineParams.targetstage8,
        targetstage9:this.pipelineParams.targetstage9,
        targetstage10:this.pipelineParams.targetstage10,
        targetstage11:this.pipeParams.targetstage11,
        //targetstage12:this.pipeParams.targetstage12,
        //targetstage13:this.pipeParams.targetstage13,
        targetstage14:this.pipelineParams.targetstage14,
        targetstage15:this.pipelineParams.targetstage15,
        targetstage16:this.pipelineParams.targetstage16,
        targetstage17:this.pipelineParams.targetstage17,
        targetstage18:this.pipelineParams.targetstage18,
        targetstage19:this.pipelineParams.targetstage19,
        targetstage20:this.pipelineParams.targetstage20,
        targetstage21:this.pipelineParams.targetstage21,
        targetstage22:this.pipelineParams.targetstage22,
       /* targetstage23:this.pipeParams.targetstage23,
        targetstage24:this.pipeParams.targetstage24,
        targetstage25:this.pipeParams.targetstage25,
        targetstage26:this.pipeParams.targetstage26,
        targetstage27:this.pipeParams.targetstage27,
        targetstage28:this.pipeParams.targetstage28,
        targetstage29:this.pipeParams.targetstage29,
        targetstage30:this.pipeParams.targetstage30*/
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
            console.log('Pipeline triggered successfully');
        },
        (error) => {
            console.error('Error triggering pipeline:', error);
        }
    );  
}

/*selenuimfunction(){
   
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
}*/

/*jmeterfunction()
{
  this.b.jmeter().subscribe(data=>{this.resultat=data;});
}*/





}
