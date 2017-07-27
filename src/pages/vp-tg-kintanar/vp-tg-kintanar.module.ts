import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPtgPage } from '../vp-tg-kintanar/vp-tg-kintanar';

@NgModule({
  declarations: [
    VPtgPage,
  ],
  imports: [
    IonicPageModule.forChild(VPtgPage),
  ],
  exports: [
    VPtgPage
  ]
})
export class VPtgPageModule {}
