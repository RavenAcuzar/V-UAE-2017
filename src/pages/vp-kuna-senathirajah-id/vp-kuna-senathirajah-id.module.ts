import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPksPageID } from '../vp-kuna-senathirajah-id/vp-kuna-senathirajah-id';

@NgModule({
  declarations: [
    VPksPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPksPageID),
  ],
  exports: [
    VPksPageID
  ]
})
export class VPksPageIDModule {}
