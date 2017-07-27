import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPcmPageAR } from '../vp-cherian-mathew-ar/vp-cherian-mathew-ar';

@NgModule({
  declarations: [
    VPcmPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPcmPageAR),
  ],
  exports: [
    VPcmPageAR
  ]
})
export class VPcmPageARModule {}
