import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPtgPageAR } from '../vp-tg-kintanar-ar/vp-tg-kintanar-ar';

@NgModule({
  declarations: [
    VPtgPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPtgPageAR),
  ],
  exports: [
    VPtgPageAR
  ]
})
export class VPtgPageARModule {}
