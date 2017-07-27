import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdiPageFR } from '../vp-donna-imson-fr/vp-donna-imson-fr';

@NgModule({
  declarations: [
    VPdiPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPdiPageFR),
  ],
  exports: [
    VPdiPageFR
  ]
})
export class VPdiPageFRModule {}
