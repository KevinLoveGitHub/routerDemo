import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
	<nav [ngClass] = "'parent-menu'">
	  <ul>
         <li><a routerLink="/book" routerLinkActive="active">Book</a></li>	  
         <!--<li><a [routerLink]="[{ outlets: { bookPopup: ['add-book'] } }]" routerLinkActive="active">Add Book</a></li>			 -->
         <li (click)="nav()">Add Book</li>			 
		 <li><a [routerLink]="[{ outlets: { bookList: ['book-detail'] } }]" routerLinkActive="active">Book Details</a></li>	
	  </ul> 
	</nav>  
	<router-outlet></router-outlet>	
	<router-outlet name="bookList"></router-outlet>
	<router-outlet name="bookPopup"></router-outlet>
  `
})
export class AppComponent {

  constructor(private router: Router) {
  }

  nav(){
    this.router.navigate([{outlets: {bookPopup: ['add-book']}}]);
  }
}
