import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DicManageComponent } from './dic-manage/dic-manage.component';
import { DicTypeDetailComponent } from './dic-type-detail/dic-type-detail.component';


const routes: Routes = [
  {path: 'dic-manage', component: DicManageComponent},
  {path: 'dic-type-detail', component: DicTypeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicRoutingModule { }
