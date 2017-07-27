import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VFPPageID } from '../vfp-joseph-bismark-id/vfp-joseph-bismark-id';

@NgModule({
  declarations: [
    VFPPageID,
  ],
  imports: [
    IonicPageModule.forChild(VFPPageID),
  ],
  exports: [
    VFPPageID
  ]
})
export class VFPPageIDModule {}
