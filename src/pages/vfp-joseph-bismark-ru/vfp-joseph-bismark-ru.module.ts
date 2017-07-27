import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VFPPageRU } from '../vfp-joseph-bismark-ru/vfp-joseph-bismark-ru';

@NgModule({
  declarations: [
    VFPPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VFPPageRU),
  ],
  exports: [
    VFPPageRU
  ]
})
export class VFPPageRUModule {}
