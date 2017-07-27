import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPtgPageRU } from '../vp-tg-kintanar-ru/vp-tg-kintanar-ru';

@NgModule({
  declarations: [
    VPtgPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPtgPageRU),
  ],
  exports: [
    VPtgPageRU
  ]
})
export class VPtgPageRUModule {}
