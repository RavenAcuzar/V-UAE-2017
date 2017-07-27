import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdsPageID } from '../vp-david-sharma-id/vp-david-sharma-id';

@NgModule({
  declarations: [
    VPdsPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPdsPageID),
  ],
  exports: [
    VPdsPageID
  ]
})
export class VPdsPageIDModule {}
