import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';

@NgModule({
  declarations: [
    Dubai101Page,
  ],
  imports: [
    IonicPageModule.forChild(Dubai101Page),
  ],
  exports: [
    Dubai101Page
  ]
})
export class Dubai101PageModule {}
