import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { HomePage } from '../home/home.page';
import { DeptresultPage } from '../deptresult/deptresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
    ])
  ],
  declarations: [
    ListPage,
  ],
  providers: [
    HomePage,
  ]
})
export class ListPageModule {}
