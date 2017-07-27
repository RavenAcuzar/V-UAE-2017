import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPahPageFR } from '../vp-adly-hassan-fr/vp-adly-hassan-fr';

@NgModule({
  declarations: [
    VPahPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPahPageFR),
  ],
  exports: [
    VPahPageFR
  ]
})
export class VPahPageFRModule {}
