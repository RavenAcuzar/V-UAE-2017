import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPhnPageFR } from '../vp-hendra-nilam-fr/vp-hendra-nilam-fr';

@NgModule({
  declarations: [
    VPhnPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPhnPageFR),
  ],
  exports: [
    VPhnPageFR
  ]
})
export class VPhnPageFRModule {}
