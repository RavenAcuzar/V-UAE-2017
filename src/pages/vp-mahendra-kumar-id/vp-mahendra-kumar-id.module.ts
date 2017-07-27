import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmkPageID } from '../vp-mahendra-kumar-id/vp-mahendra-kumar-id';

@NgModule({
  declarations: [
    VPmkPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPmkPageID),
  ],
  exports: [
    VPmkPageID
  ]
})
export class VPmkPageIDModule {}
