import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPtgPageTR } from '../vp-tg-kintanar-tr/vp-tg-kintanar-tr';

@NgModule({
  declarations: [
    VPtgPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPtgPageTR),
  ],
  exports: [
    VPtgPageTR
  ]
})
export class VPtgPageTRModule {}
