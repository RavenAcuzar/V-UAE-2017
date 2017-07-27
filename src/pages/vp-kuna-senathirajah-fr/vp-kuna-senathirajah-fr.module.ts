import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPksPageFR } from '../vp-kuna-senathirajah-fr/vp-kuna-senathirajah-fr';

@NgModule({
  declarations: [
    VPksPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPksPageFR),
  ],
  exports: [
    VPksPageFR
  ]
})
export class VPksPageFRModule {}
