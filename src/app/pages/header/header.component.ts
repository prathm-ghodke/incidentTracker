import { Component, inject } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatSidenavModule, MatIconModule, MatButtonModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedUser:any;
  sideNavToggle: boolean = true;
  router = inject(Router);
  constructor() {
    const data = localStorage.getItem('incidentUser');
    if (data) {
      this.loggedUser = JSON.parse(data);
      console.log(this.loggedUser);
    }
   }

  toggleSideNav() {
    this.sideNavToggle = !this.sideNavToggle;
  }
  logout() {
    localStorage.removeItem('incidentUser');
    this.router.navigateByUrl('/login');
  }
}
