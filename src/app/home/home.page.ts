import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public year: string;


  constructor(private router: Router) {}

  openPage(yr: string) {
    this.year = yr;
    console.log('Opening the ', this.year, ' year departments page');
    this.router.navigate(['/list',{year: yr}]);
  }

}
