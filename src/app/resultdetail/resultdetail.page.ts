import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-resultdetail',
  templateUrl: './resultdetail.page.html',
  styleUrls: ['./resultdetail.page.scss'],
})
export class ResultdetailPage implements OnInit {

  @Input() modal: any;

  private item: any;

  public res = [];

  constructor(private navParams: NavParams,
    private modalCtrl: ModalController) { 
    this.getData();
  }

  ngOnInit() {
  }

  capitalize(s): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  getData() {
    this.item = this.navParams.get('data');
    // console.log('item is ', this.item);
    // console.log('item name is ', this.item.name);
    this.res = Object.entries(this.item).map(([k,v]) => {
      return [this.capitalize(k), v];
    });
    // console.log('res is : ', this.res);
  }

  closeModal() {
    this.modal.dismiss();
  }
}
