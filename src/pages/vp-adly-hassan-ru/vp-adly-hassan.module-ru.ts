import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPahPageRU } from '../vp-adly-hassan-ru/vp-adly-hassan-ru';

@NgModule({
  declarations: [
    VPahPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPahPageRU),
  ],
  exports: [
    VPahPageRU
  ]
})
export class VPahPageRUModule {}
