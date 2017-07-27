import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VFPPage } from '../vfp-joseph-bismark/vfp-joseph-bismark';

@NgModule({
  declarations: [
    VFPPage,
  ],
  imports: [
    IonicPageModule.forChild(VFPPage),
  ],
  exports: [
    VFPPage
  ]
})
export class VFPPageModule {}
