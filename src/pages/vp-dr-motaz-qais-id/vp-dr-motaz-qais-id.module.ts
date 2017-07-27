import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmqPageID } from '../vp-dr-motaz-qais-id/vp-dr-motaz-qais-id';

@NgModule({
  declarations: [
    VPmqPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPmqPageID),
  ],
  exports: [
    VPmqPageID
  ]
})
export class VPmqPageIDModule {}
