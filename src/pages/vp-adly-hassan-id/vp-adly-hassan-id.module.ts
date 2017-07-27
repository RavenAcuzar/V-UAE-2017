import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPahPageID } from '../vp-adly-hassan-id/vp-adly-hassan-id';

@NgModule({
  declarations: [
    VPahPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPahPageID),
  ],
  exports: [
    VPahPageID
  ]
})
export class VPahPageIDModule {}
