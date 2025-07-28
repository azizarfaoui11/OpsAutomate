import { Component, Inject, Input } from '@angular/core';
import { User } from '../../../core/model/User';
import { DashService } from '../../../core/services/dash.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from '../tables/tables.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,TablesComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {


  user: User = new User();
  @Input() id: number = 0;


  /*constructor(
    private service: DashService, private router: Router, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}*/
    constructor(
      private service: DashService,
      public activeModal: NgbActiveModal
    ) {}

  /*ngOnInit(): void {
    this.service.getuserbyid(this.data.id).subscribe((result: User) => {
      this.user = result;
    });
  }*/
    ngOnInit(): void {
      this.service.getuserbyid(this.id).subscribe((result: User) => {
        this.user = result;
      });
    }

    updateUser() {
      this.service.updateuser(this.user.id, this.user).subscribe(
        response => {
          console.log('User updated successfully');
          this.activeModal.close(true);
        },
        error => {
          console.error('Error updating user', error);
        }
      );
    }
  onSubmit() {
    this.updateUser();
  }

  onCancel(): void {
    this.activeModal.dismiss();
  }

}
