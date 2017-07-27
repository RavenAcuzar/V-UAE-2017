import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPtgPageFR } from '../vp-tg-kintanar-fr/vp-tg-kintanar-fr';

@NgModule({
  declarations: [
    VPtgPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPtgPageFR),
  ],
  exports: [
    VPtgPageFR
  ]
})
export class VPtgPageFRModule {}
