import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoadingController } from '@ionic/angular';

import { User } from '../shared/user';
import { department } from '../shared/department';


@Component({
  selector: 'app-individual',
  templateUrl: './individual.page.html',
  styleUrls: ['./individual.page.scss'],
})
export class IndividualPage implements OnInit {

  resultForm: FormGroup;
  user: User = {roll: '', dept: '', year: ''};
  results: any;
  result: any = null;
  errMess: string = null;
  loading;

  constructor(private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController) {

    this.resultForm = this.formBuilder.group({
      roll: ['', Validators.required],
      dept: ['', Validators.required],
      year: ['', Validators.required]
    });

   }

  ngOnInit() {
  }

  onSubmit() {
    this.user.roll = this.resultForm.get('roll').value;
    this.user.dept = this.resultForm.get('dept').value;
    this.user.year = this.resultForm.get('year').value;
    this.LoadingScreen();

    // this.extractData();
    setTimeout(() => this.extractData(), 1000);
  
  }

  capitalize(s): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  capital(s): string {
    return s.toUpperCase();
  }

  LoadingScreen() {
    this.loading = this.loadingCtrl.create({
      message: 'Loading Result',
      duration: 1000
    }).then((loading) => loading.present());

  }

  extractData() {
    

    this.errMess = null;
    this.results = new department(this.user).departmentList();
    this.result = this.results.find(result => {
      if (result['roll'] == this.user.roll)
        return result;
    });
    if (this.result) {
      this.result = Object.entries(this.result).map(([k,v]) => {
        return [this.capitalize(k), v];
      });
    }
    // console.log(this.result);
    else if (!this.result) {
      this.errMess = 'Result does not exist in database';
    }
  }

}
