import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdjPageFR } from '../vp-dev-johl-fr/vp-dev-johl-fr';

@NgModule({
  declarations: [
    VPdjPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPdjPageFR),
  ],
  exports: [
    VPdjPageFR
  ]
})
export class VPdjPageFRModule {}
