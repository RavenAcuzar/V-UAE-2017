import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPcmPageTR } from '../vp-cherian-mathew-tr/vp-cherian-mathew-tr';

@NgModule({
  declarations: [
    VPcmPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPcmPageTR),
  ],
  exports: [
    VPcmPageTR
  ]
})
export class VPcmPageTRModule {}
