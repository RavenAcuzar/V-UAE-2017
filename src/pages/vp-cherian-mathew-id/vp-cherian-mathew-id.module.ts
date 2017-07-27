import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPcmPageID } from '../vp-cherian-mathew-id/vp-cherian-mathew-id';

@NgModule({
  declarations: [
    VPcmPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPcmPageID),
  ],
  exports: [
    VPcmPageID
  ]
})
export class VPcmPageIDModule {}
