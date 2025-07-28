import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor],
  templateUrl: './monitoring.component.html',
  styleUrl: 'C://pfefront//pfeFront//src//assets//css//material-dashboard.css'
})
export class MonitoringComponent {
  r1:any;
  r2:any;
  r3:any;
  r4:any;

  constructor(private router:Router , private ps:PaymentService)
  {

  }

 /* onsubmit()
{
  this.router.navigate(['tables']);
}*/

back()
{
  return this.ps.getdashboardback().subscribe(data=>{this.r1=data;

  })
}

database()
{
  return this.ps.getdashboarddatabase().subscribe(data=>{this.r2=data;

  })
}

machinevirtuel()
{
  return this.ps.getdashboardVM().subscribe(data=>{this.r3=data;

  })
}

containers()
{
  return this.ps.getdashboardContainers().subscribe(data=>{this.r4=data;

  })
}


}
