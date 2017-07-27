import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPpsPageAR } from '../vp-pathman-senathirajah-ar/vp-pathman-senathirajah-ar';

@NgModule({
  declarations: [
    VPpsPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPpsPageAR),
  ],
  exports: [
    VPpsPageAR
  ]
})
export class VPpsPageARModule {}
