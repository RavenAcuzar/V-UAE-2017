import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmqPageRU } from '../vp-dr-motaz-qais-ru/vp-dr-motaz-qais-ru';

@NgModule({
  declarations: [
    VPmqPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPmqPageRU),
  ],
  exports: [
    VPmqPageRU
  ]
})
export class VPmqPageRUModule {}
