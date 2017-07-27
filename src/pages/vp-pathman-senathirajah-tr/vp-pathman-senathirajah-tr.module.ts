import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPpsPageTR } from '../vp-pathman-senathirajah-tr/vp-pathman-senathirajah-tr';

@NgModule({
  declarations: [
    VPpsPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPpsPageTR),
  ],
  exports: [
    VPpsPageTR
  ]
})
export class VPpsPageTRModule {}
