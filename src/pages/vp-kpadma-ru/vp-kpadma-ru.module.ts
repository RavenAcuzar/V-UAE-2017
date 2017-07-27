import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPkpPageRU } from '../vp-kpadma-ru/vp-kpadma-ru';

@NgModule({
  declarations: [
    VPkpPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPkpPageRU),
  ],
  exports: [
    VPkpPageRU
  ]
})
export class VPkpPageRUModule {}
