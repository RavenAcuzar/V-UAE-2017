import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPkpPageFR } from '../vp-kpadma-fr/vp-kpadma-fr';

@NgModule({
  declarations: [
    VPkpPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPkpPageFR),
  ],
  exports: [
    VPkpPageFR
  ]
})
export class VPkpPageFRModule {}
