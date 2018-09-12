import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';

import { Router, ActivatedRoute } from '@angular/router';

import { ResultdetailPage } from '../resultdetail/resultdetail.page';
import { department } from '../shared/department';

@Component({
  selector: 'app-deptresult',
  templateUrl: './deptresult.page.html',
  styleUrls: ['./deptresult.page.scss'],
})
export class DeptresultPage implements OnInit {

  year: any = 'third';
  dept: any = 'Cse';
  user = {dept: '', year: ''};

  public results: any;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {

    this.user.year = this.route.snapshot.paramMap.get('yr');
    this.user.dept = this.route.snapshot.paramMap.get('dp');
    // console.log('this.year = ', this.year, ' and this.dept = ', this.dept);
    this.results = new department(this.user).departmentList();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async openResult(item) {

    this.loadingCtrl.create({
      message: 'Fetching Details',
      duration: 1000,
    }).then((loading) => {
      loading.present();
      this.modalCtrl.create({
        component: ResultdetailPage,
        componentProps: { data: item },
      }).then((modal) => modal.present());
      
      // return await modal.present();
    });

    

  }


}
