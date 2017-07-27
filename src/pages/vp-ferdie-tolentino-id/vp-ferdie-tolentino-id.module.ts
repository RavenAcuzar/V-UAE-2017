import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPftPageID } from '../vp-ferdie-tolentino-id/vp-ferdie-tolentino-id';

@NgModule({
  declarations: [
    VPftPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPftPageID),
  ],
  exports: [
    VPftPageID
  ]
})
export class VPftPageIDModule {}
