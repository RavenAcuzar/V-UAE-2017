import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPssPageFR } from '../vp-sathi-senathirajah-fr/vp-sathi-senathirajah-fr';

@NgModule({
  declarations: [
    VPssPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPssPageFR),
  ],
  exports: [
    VPssPageFR
  ]
})
export class VPssPageFRModule {}
