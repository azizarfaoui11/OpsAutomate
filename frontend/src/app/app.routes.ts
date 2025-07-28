import { Routes } from '@angular/router';
import { PipelineComponent } from './pages/front/pipeline/pipeline.component';
import { HomeComponent } from './pages/front/home/home.component';
import { ContactComponent } from './pages/front/contact/contact.component';
import { PaginationComponent } from './pages/front/pagination/pagination.component';
import { Page3Component } from './pages/front/page3/page3.component';
import { RecapComponent } from './pages/front/recap/recap.component';
import { TestsComponent } from './pages/front/tests/tests.component';
import { ForfunComponent } from './pages/front/forfun/forfun.component';
import { DocumentationComponent } from './pages/front/documentation/documentation.component';
import { StripeComponent } from './pages/front/stripe/stripe.component';
import { LoginComponent } from './pages/front/login/login.component';
import { RegisterComponent } from './pages/front/register/register.component';
import { ResetPasswordRequestComponent } from './pages/front/reset-password-request/reset-password-request.component';
import { Component } from '@angular/core';
import { ResetPasswordComponent } from './pages/front/reset-password/reset-password.component';
import { OpsautomateComponent } from './pages/front/opsautomate/opsautomate.component';
import { BillingComponent } from './pages/dashboard/billing/billing.component';
import { DashComponent } from './pages/dashboard/dash/dash.component';
import { TablesComponent } from './pages/dashboard/tables/tables.component';
import { LogoutmodalComponent } from './pages/front/logoutmodal/logoutmodal.component';
import { AdduserComponent } from './pages/dashboard/adduser/adduser.component';
import { JmeterSelenComponent } from './pages/front/jmeter-selen/jmeter-selen.component';
import { UploadfileComponent } from './pages/front/uploadfile/uploadfile.component';
import { PaymentComponent } from './pages/front/payment/payment.component';
import { AbonnComponent } from './pages/front/abonn/abonn.component';
import { Stripe2Component } from './pages/front/stripe2/stripe2.component';
import { Stripe3Component } from './pages/front/stripe3/stripe3.component';
import { compileClassDebugInfo } from '@angular/compiler';
import { GrouperessourceComponent } from './pages/front/grouperessource/grouperessource.component';
import { NotfoundComponent } from './pages/front/notfound/notfound.component';
import { ProjetComponent } from './pages/front/projet/projet.component';
import { RessourceComponent } from './pages/front/ressource/ressource.component';
import { EssaieComponent } from './pages/front/essaie/essaie.component';
import { Essaie1Component } from './pages/front/essaie1/essaie1.component';
import { Essaie2Component } from './pages/front/essaie2/essaie2.component';
import { Essaie3Component } from './pages/front/essaie3/essaie3.component';
import { UserdetailsComponent } from './pages/front/userdetails/userdetails.component';
import { MonitoringComponent } from './pages/dashboard/monitoring/monitoring.component';
import { HebergementComponent } from './pages/front/hebergement/hebergement.component';




export const routes: Routes = [


       {  path : 'home' , component: HomeComponent},
       {  path :'' , component:OpsautomateComponent},
       {  path : 'pipeline', component: PipelineComponent  },
       {  path : 'contact' , component: ContactComponent },
       {  path : 'page2' , component:PaginationComponent},
       {  path : 'page3' , component:Page3Component},
       {  path : 'recap' , component:RecapComponent},
       {  path : 'tests' , component:TestsComponent},
       {  path : 'forfun' , component:ForfunComponent},
       {  path : 'documentation' , component:DocumentationComponent},
       {  path : 'stripe' , component:StripeComponent},
       {  path : 'signin', component:LoginComponent},
       {  path : 'signup', component:RegisterComponent},
       {  path : 'reset-password-request', component:ResetPasswordRequestComponent},
       {  path : 'reset-password',         component:ResetPasswordComponent},
       { path:'dash', component:DashComponent},
       { path : 'billing' , component:BillingComponent},
       { path:'tables',component:TablesComponent},
       {path:'notif', component:LogoutmodalComponent},
       {path:'adduser', component:AdduserComponent},
       {path:'page5' , component:JmeterSelenComponent},
       {path: 'uploadfile', component:UploadfileComponent},
       {path:'payment',component:PaymentComponent},
       {path :'abonn',component:AbonnComponent},
        {path: 'stripe2',component:Stripe2Component},
        {path:'stripe3',component:Stripe3Component},
        {path :'grp',component:GrouperessourceComponent},
        {path:'notfound',component:NotfoundComponent},
        {path:'projet',component:ProjetComponent},
        {
          path :'ressource',component:RessourceComponent
        }, 
        {
          path:'essaie',component:EssaieComponent
        },
        {
          path:'essaie1',component:Essaie1Component

        },
        {
          path:'essaie2',component:Essaie2Component

        },
        {
          path:'essaie3',component:Essaie3Component

        },
        {
          path:'details',component:UserdetailsComponent
        },
        {
          path:'monitoring',component:MonitoringComponent
        },
        {
          path:'hebergement',component:HebergementComponent
        }






        //path:"",
       // loadChildren:() => import('./pages/front/front.module').then(m => m.FrontModule)
       //},
       /*{
         path:"dashboard",
         //loadChildren:() => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
         */
        

];
