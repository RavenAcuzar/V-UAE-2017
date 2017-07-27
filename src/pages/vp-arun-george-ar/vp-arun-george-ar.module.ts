import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPagPageAR } from '../vp-arun-george-ar/vp-arun-george-ar';

@NgModule({
  declarations: [
    VPagPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPagPageAR),
  ],
  exports: [
    VPagPageAR
  ]
})
export class VPagPageARModule {}
