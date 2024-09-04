import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.scss'
})
export class AppMenuComponent {
  constructor(private router:Router){
    
  }
navigateto() {
  this.router.navigate(['about']);

}

}

