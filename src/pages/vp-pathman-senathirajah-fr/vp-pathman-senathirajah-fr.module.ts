import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPpsPageFR } from '../vp-pathman-senathirajah-fr/vp-pathman-senathirajah-fr';

@NgModule({
  declarations: [
    VPpsPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPpsPageFR),
  ],
  exports: [
    VPpsPageFR
  ]
})
export class VPpsPageFRModule {}
