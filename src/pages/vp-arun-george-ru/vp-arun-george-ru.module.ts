import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPagPageRU } from '../vp-arun-george-ru/vp-arun-george-ru';

@NgModule({
  declarations: [
    VPagPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPagPageRU),
  ],
  exports: [
    VPagPageRU
  ]
})
export class VPagPageRUModule {}
