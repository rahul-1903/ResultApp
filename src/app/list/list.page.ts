import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  

  public depts = [
    'Computer Science And Engineering',
    'Information Technology',
    'Civil Engineering',
    'Mechanical Engineering',
    'Biotechnology',
    'Electronics and Communication Engineering',
    'AEIE'
  ];
  public abbr = [ 
    'Cse','It','Cv','Me','Bt','Ece','Aeie'
  ]

  year: string = 'first';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.year = this.route.snapshot.paramMap.get('year');
    // console.log('user clicked in year ', this.year);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }


  
  openDept(dept: string) {
    // console.log('Opening ', this.year, ' year ', dept, ' department result');
    this.loadingCtrl.create({
      message: `Loading ${dept} Result`,
      duration: 2000
    }).then((loading) => {
      loading.present();
      this.router.navigate(['/deptresult', {yr: this.year, dp: this.abbr[this.depts.indexOf(dept)]}]);

    });

    // this.router.navigate(['/deptresult', {yr: this.year, dp: this.abbr[this.depts.indexOf(dept)]}]);
  }

}
