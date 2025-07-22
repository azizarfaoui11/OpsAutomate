import { Component } from '@angular/core';
import { PipelineserviceService } from './core/services/pipelineservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from './core/services/interceptor/token-interceptor.interceptor';

@Component({
  
  selector: 'app-root',
  standalone: true ,
  imports : [CommonModule,RouterLink,RouterOutlet,FormsModule,PortalModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:
  [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  //[PipelineserviceService]
})
export class AppComponent {
  title = 'pfeFront';
  totalPages = 10; // Remplacez par le nombre total de pages
  currentPage = 1;

  onPageChanged(page: number): void {
    this.currentPage = page;}

  /*constructor(private a: PipelineserviceService) {}

  triggerPipeline() {
    this.a.triggerPipeline().subscribe(
      () => {
        console.log('Pipeline triggered successfully');
      },
      (error) => {
        console.error('Error triggering pipeline:', error);
      }
    );
  }*/
}
