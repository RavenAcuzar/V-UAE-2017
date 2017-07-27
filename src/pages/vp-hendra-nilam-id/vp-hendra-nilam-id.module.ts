import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPhnPageID } from '../vp-hendra-nilam-id/vp-hendra-nilam-id';

@NgModule({
  declarations: [
    VPhnPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPhnPageID),
  ],
  exports: [
    VPhnPageID
  ]
})
export class VPhnPageIDModule {}
