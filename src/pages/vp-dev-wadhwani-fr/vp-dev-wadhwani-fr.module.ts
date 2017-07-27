import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdwPageFR } from '../vp-dev-wadhwani-fr/vp-dev-wadhwani-fr';

@NgModule({
  declarations: [
    VPdwPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPdwPageFR),
  ],
  exports: [
    VPdwPageFR
  ]
})
export class VPdwPageFRModule {}
