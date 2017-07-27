import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdiPage } from '../vp-donna-imson/vp-donna-imson';

@NgModule({
  declarations: [
    VPdiPage,
  ],
  imports: [
    IonicPageModule.forChild(VPdiPage),
  ],
  exports: [
    VPdiPage
  ]
})
export class VPdiPageModule {}
