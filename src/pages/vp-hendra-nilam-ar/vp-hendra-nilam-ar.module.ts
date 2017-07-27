import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPhnPageAR } from '../vp-hendra-nilam-ar/vp-hendra-nilam-ar';

@NgModule({
  declarations: [
    VPhnPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPhnPageAR),
  ],
  exports: [
    VPhnPageAR
  ]
})
export class VPhnPageARModule {}
