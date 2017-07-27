import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdiPageID } from '../vp-donna-imson-id/vp-donna-imson-id';

@NgModule({
  declarations: [
    VPdiPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPdiPageID),
  ],
  exports: [
    VPdiPageID
  ]
})
export class VPdiPageIDModule {}
