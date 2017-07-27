import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmqPageFR } from '../vp-dr-motaz-qais-fr/vp-dr-motaz-qais-fr';

@NgModule({
  declarations: [
    VPmqPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPmqPageFR),
  ],
  exports: [
    VPmqPageFR
  ]
})
export class VPmqPageFRModule {}
