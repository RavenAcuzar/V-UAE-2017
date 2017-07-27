import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPpsPageID } from '../vp-pathman-senathirajah-id/vp-pathman-senathirajah-id';

@NgModule({
  declarations: [
    VPpsPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPpsPageID),
  ],
  exports: [
    VPpsPageID
  ]
})
export class VPpsPageIDModule {}
