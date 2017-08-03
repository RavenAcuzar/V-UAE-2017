import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {VPdwPageID} from "./vp-dev-wadhwani-id";

@NgModule({
  declarations: [
    VPdwPageID,
  ],
  imports: [
    IonicPageModule.forChild(VPdwPageID),
  ],
  exports: [
    VPdwPageID
  ]
})
export class VPdwPageIDModule {}
