import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPhnPageRU } from '../vp-hendra-nilam-ru/vp-hendra-nilam-ru';

@NgModule({
  declarations: [
    VPhnPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPhnPageRU),
  ],
  exports: [
    VPhnPageRU
  ]
})
export class VPhnPageRUModule {}
