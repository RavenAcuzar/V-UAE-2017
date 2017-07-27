import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPhnPageTR } from '../vp-hendra-nilam-tr/vp-hendra-nilam-tr';

@NgModule({
  declarations: [
    VPhnPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPhnPageTR),
  ],
  exports: [
    VPhnPageTR
  ]
})
export class VPhnPageTRModule {}
