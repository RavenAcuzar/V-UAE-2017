import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdjPageID } from '../vp-dev-johl-id/vp-dev-johl-id';

@NgModule({
  declarations: [
    VPdjPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPdjPageID),
  ],
  exports: [
    VPdjPageID
  ]
})
export class VPdjPageIDModule {}
