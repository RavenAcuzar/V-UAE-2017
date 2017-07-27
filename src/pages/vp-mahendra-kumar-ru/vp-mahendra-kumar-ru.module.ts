import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmkPageRU } from '../vp-mahendra-kumar-ru/vp-mahendra-kumar-ru';

@NgModule({
  declarations: [
    VPmkPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPmkPageRU),
  ],
  exports: [
    VPmkPageRU
  ]
})
export class VPmkPageRUModule {}
