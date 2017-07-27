import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPkpPageAR } from '../vp-kpadma-ar/vp-kpadma-ar';

@NgModule({
  declarations: [
    VPkpPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPkpPageAR),
  ],
  exports: [
    VPkpPageAR
  ]
})
export class VPkpPageARModule {}
