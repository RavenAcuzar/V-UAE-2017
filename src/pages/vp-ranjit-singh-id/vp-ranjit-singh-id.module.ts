import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPrsPageID } from '../vp-ranjit-singh-id/vp-ranjit-singh-id';

@NgModule({
  declarations: [
    VPrsPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPrsPageID),
  ],
  exports: [
    VPrsPageID
  ]
})
export class VPrsPageIDModule {}
