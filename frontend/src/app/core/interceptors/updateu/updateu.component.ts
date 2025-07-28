/*import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../../core/model/User';
import { DashService } from '../../../core/services/dash.service';
import { TablesComponent } from '../tables/tables.component';

@Component({
  selector: 'app-updateu',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,TablesComponent],
  templateUrl: './updateu.component.html',
  styleUrl: './updateu.component.css'
})
export class UpdateuComponent {

  user: User = new User(); // Assure-toi que User est correctement importé depuis ton modèle
  id:number=0;



  constructor(private service: DashService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log("voila ID :",this.id)

    });
      this.service.getuserbyid(this.id).subscribe((result: User) => {
        this.user = result;
        console.log(this.user);
        });
        console.log("salut aziz");

        
  }

  
    
  

    updateUser() {
      this.service.updateuser(this.user.id, this.user).subscribe(
        response => {
          console.log('User updated successfully');
          //this.loadUsers(); // Actualisez la liste des utilisateurs après la mise à jour
          //this.user=null;
          this.router.navigate(['/tables']);
        },
        error => {
          console.error('Error updating user', error);
        }
      );
    }
    OnSubmit()
    {
      this.updateUser();
    }

  


}
*/