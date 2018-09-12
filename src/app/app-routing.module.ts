import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
  },
  { 
    path: 'deptresult', 
    loadChildren: './deptresult/deptresult.module#DeptresultPageModule'
  },
  { path: 'resultdetail', loadChildren: './resultdetail/resultdetail.module#ResultdetailPageModule' },
  { path: 'individual', loadChildren: './individual/individual.module#IndividualPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
