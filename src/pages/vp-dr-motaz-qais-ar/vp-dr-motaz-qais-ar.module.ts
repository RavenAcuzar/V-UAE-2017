import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmqPageAR } from '../vp-dr-motaz-qais-ar/vp-dr-motaz-qais-ar';

@NgModule({
  declarations: [
    VPmqPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPmqPageAR),
  ],
  exports: [
    VPmqPageAR
  ]
})
export class VPmqPageARModule {}
