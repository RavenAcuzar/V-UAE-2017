import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdiPageTR } from '../vp-donna-imson-tr/vp-donna-imson-tr';

@NgModule({
  declarations: [
    VPdiPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPdiPageTR),
  ],
  exports: [
    VPdiPageTR
  ]
})
export class VPdiPageTRModule {}
