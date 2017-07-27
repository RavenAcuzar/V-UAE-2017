import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPagPageID } from '../vp-arun-george-id/vp-arun-george-id';

@NgModule({
  declarations: [
    VPagPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPagPageID),
  ],
  exports: [
    VPagPageID
  ]
})
export class VPagPageIDModule {}
