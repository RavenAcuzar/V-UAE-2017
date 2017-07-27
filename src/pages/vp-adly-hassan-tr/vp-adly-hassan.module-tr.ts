import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPahPageTR } from '../vp-adly-hassan-tr/vp-adly-hassan-tr';

@NgModule({
  declarations: [
    VPahPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPahPageTR),
  ],
  exports: [
    VPahPageTR
  ]
})
export class VPahPageTRModule {}
