import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPpsPageRU } from '../vp-pathman-senathirajah-ru/vp-pathman-senathirajah-ru';

@NgModule({
  declarations: [
    VPpsPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPpsPageRU),
  ],
  exports: [
    VPpsPageRU
  ]
})
export class VPpsPageRUModule {}
