import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VFPPageTR } from '../vfp-joseph-bismark-tr/vfp-joseph-bismark-tr';

@NgModule({
  declarations: [
    VFPPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VFPPageTR),
  ],
  exports: [
    VFPPageTR
  ]
})
export class VFPPageTRModule {}
