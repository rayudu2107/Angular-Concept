import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss'
})
export class UsercardComponent {
  cuser: any;

  constructor(private us: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //way 1
    this.route.paramMap.subscribe(params => {
      const userIdParam = params.get('id'); // Get the 'id' parameter from the route
      if (userIdParam !== null) { // Check if the parameter is not null
        const userid = +userIdParam; // Convert the parameter to a number
        this.cuser = this.us.users.find(u => u.id === userid); // Find the user by ID
      } else {
        console.error('User ID is null'); // Handle the case where the 'id' parameter is missing
        this.cuser = null; // Optionally set cuser to null or a default value
      }
    });

    // Way 2 - Direct access from snapshot
    // const userIdParam = this.route.snapshot.paramMap.get('id');
    // if (userIdParam) {
    //   const userid = +userIdParam; // Convert the parameter to a number
    //   this.cuser = this.us.users.find(u => u.id === userid); // Find the user by ID
    // } else {
    //   console.error('User ID is null');
    //   this.cuser = null; // Optionally set cuser to null or a default value
    // }
  }
}
