import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPtgPageID } from '../vp-tg-kintanar-id/vp-tg-kintanar-id';

@NgModule({
  declarations: [
    VPtgPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPtgPageID),
  ],
  exports: [
    VPtgPageID
  ]
})
export class VPtgPageIDModule {}
