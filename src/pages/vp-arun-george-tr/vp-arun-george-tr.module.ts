import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPagPageTR } from '../vp-arun-george-tr/vp-arun-george-tr';

@NgModule({
  declarations: [
    VPagPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPagPageTR),
  ],
  exports: [
    VPagPageTR
  ]
})
export class VPagPageTRModule {}
