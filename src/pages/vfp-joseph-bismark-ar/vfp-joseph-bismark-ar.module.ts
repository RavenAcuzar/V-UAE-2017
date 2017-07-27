import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VFPPageAR } from '../vfp-joseph-bismark-ar/vfp-joseph-bismark-ar';

@NgModule({
  declarations: [
    VFPPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VFPPageAR),
  ],
  exports: [
    VFPPageAR
  ]
})
export class VFPPageARModule {}
