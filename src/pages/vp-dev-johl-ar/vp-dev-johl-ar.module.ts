import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdjPageAR } from '../vp-dev-johl-ar/vp-dev-johl-ar';

@NgModule({
  declarations: [
    VPdjPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPdjPageAR),
  ],
  exports: [
    VPdjPageAR
  ]
})
export class VPdjPageARModule {}
