import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DicRoutingModule } from './dic-routing.module';
import { DicManageComponent } from './dic-manage/dic-manage.component';
import { SharedModule } from 'src/app/share/share.module';
import { DicTypeDetailComponent } from './dic-type-detail/dic-type-detail.component';


@NgModule({
  declarations: [DicManageComponent, DicTypeDetailComponent],
  imports: [
    CommonModule,
    DicRoutingModule,
    SharedModule
  ]
})
export class DicModule { }
