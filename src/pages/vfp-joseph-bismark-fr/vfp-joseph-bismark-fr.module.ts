import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VFPPageFR } from '../vfp-joseph-bismark-fr/vfp-joseph-bismark-fr';

@NgModule({
  declarations: [
    VFPPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VFPPageFR),
  ],
  exports: [
    VFPPageFR
  ]
})
export class VFPPageFRModule {}``
