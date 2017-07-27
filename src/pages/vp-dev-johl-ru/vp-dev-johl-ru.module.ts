import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdjPageRU } from '../vp-dev-johl-ru/vp-dev-johl-ru';

@NgModule({
  declarations: [
    VPdjPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPdjPageRU),
  ],
  exports: [
    VPdjPageRU
  ]
})
export class VPdjPageRUModule {}
