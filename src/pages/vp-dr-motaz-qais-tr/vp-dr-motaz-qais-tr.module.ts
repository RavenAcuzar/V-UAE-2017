import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmqPageTR } from '../vp-dr-motaz-qais-tr/vp-dr-motaz-qais-tr';

@NgModule({
  declarations: [
    VPmqPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPmqPageTR),
  ],
  exports: [
    VPmqPageTR
  ]
})
export class VPmqPageTRModule {}
