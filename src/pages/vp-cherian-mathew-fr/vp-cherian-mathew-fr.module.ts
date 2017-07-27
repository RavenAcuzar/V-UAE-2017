import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPcmPageFR } from '../vp-cherian-mathew-fr/vp-cherian-mathew-fr';

@NgModule({
  declarations: [
    VPcmPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPcmPageFR),
  ],
  exports: [
    VPcmPageFR
  ]
})
export class VPcmPageFRModule {}
