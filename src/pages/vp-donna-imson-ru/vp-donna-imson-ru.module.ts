import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdiPageRU } from '../vp-donna-imson-ru/vp-donna-imson-ru';

@NgModule({
  declarations: [
    VPdiPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPdiPageRU),
  ],
  exports: [
    VPdiPageRU
  ]
})
export class VPdiPageRUModule {}
