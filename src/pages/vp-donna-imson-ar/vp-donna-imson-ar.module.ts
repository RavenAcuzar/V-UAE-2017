import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdiPageAR } from '../vp-donna-imson-ar/vp-donna-imson-ar';

@NgModule({
  declarations: [
    VPdiPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPdiPageAR),
  ],
  exports: [
    VPdiPageAR
  ]
})
export class VPdiPageARModule {}
