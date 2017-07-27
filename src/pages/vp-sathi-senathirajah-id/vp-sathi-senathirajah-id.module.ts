import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPssPageID } from '../vp-sathi-senathirajah-id/vp-sathi-senathirajah-id';

@NgModule({
  declarations: [
    VPssPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPssPageID),
  ],
  exports: [
    VPssPageID
  ]
})
export class VPssPageIDModule {}
