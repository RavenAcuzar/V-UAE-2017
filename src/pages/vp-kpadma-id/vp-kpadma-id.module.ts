import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPkpPageID } from '../vp-kpadma-id/vp-kpadma-id';

@NgModule({
  declarations: [
    VPkpPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPkpPageID),
  ],
  exports: [
    VPkpPageID
  ]
})
export class VPkpPageIDModule {}
