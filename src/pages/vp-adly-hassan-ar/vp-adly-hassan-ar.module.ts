import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPahPageAR } from '../vp-adly-hassan-ar/vp-adly-hassan-ar';

@NgModule({
  declarations: [
    VPahPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPahPageAR),
  ],
  exports: [
    VPahPageAR
  ]
})
export class VPahPageARModule {}
