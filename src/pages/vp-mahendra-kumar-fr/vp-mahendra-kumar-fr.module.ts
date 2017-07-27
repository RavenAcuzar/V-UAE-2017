import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmkPageFR } from '../vp-mahendra-kumar-fr/vp-mahendra-kumar-fr';

@NgModule({
  declarations: [
    VPmkPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPmkPageFR),
  ],
  exports: [
    VPmkPageFR
  ]
})
export class VPmkPageFRModule {}
