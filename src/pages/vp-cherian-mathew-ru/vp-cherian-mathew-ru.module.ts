import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPcmPageRU } from '../vp-cherian-mathew-ru/vp-cherian-mathew-ru';

@NgModule({
  declarations: [
    VPcmPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPcmPageRU),
  ],
  exports: [
    VPcmPageRU
  ]
})
export class VPcmPageRUModule {}
