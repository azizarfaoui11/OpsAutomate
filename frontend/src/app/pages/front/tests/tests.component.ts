import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RecapComponent } from '../recap/recap.component';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { PipeParams } from '../../../core/model/PipeParams';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {

  pipelineParams:any;
  junityes: boolean = false ;
  junitno: boolean = false ;

  jmeteryes: boolean = false ;

  jmeterno: boolean = false ;
  selenuimyes: boolean = false ;
  selenuimno: boolean = false ;
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
    targetstage21:""




  }
   ;
   resultat:any;




  constructor(private b:PipelineserviceService, private router:Router) {
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
  updateTargetStage12(): void {

    if (this.jmeteryes) {
      this.pipeParams.targetstage12="jmeter";
    } 
    
  }
  updateTargetStage13(): void {

    if (this.selenuimyes) {
      this.pipeParams.targetstage13="selenuim";
    } 

    
  }
 
  triggerPipeline() {
    
    this.updateTargetStage11();
    this.updateTargetStage12();
    this.updateTargetStage13();
    
    
    
   
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
        targetstage12:this.pipeParams.targetstage12,
        targetstage13:this.pipeParams.targetstage13,
        targetstage14:this.pipelineParams.targetstage14,
        targetstage15:this.pipelineParams.targetstage15,
        targetstage16:this.pipelineParams.targetstage16,
        targetstage17:this.pipelineParams.targetstage17,
        targetstage18:this.pipelineParams.targetstage18,
        targetstage19:this.pipelineParams.targetstage19,
        targetstage20:this.pipelineParams.targetstage20,
        targetstage21:this.pipelineParams.targetstage21,



        





    }).subscribe(
        () => {
            console.log('Pipeline triggered successfully');
        },
        (error) => {
            console.error('Error triggering pipeline:', error);
        }
    );  
}

selenuimfunction(){
  this.b.Selenuim().subscribe(   () => {
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
