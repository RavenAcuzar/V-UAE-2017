import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPftPageFR } from '../vp-ferdie-tolentino-fr/vp-ferdie-tolentino-fr';

@NgModule({
  declarations: [
    VPftPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPftPageFR),
  ],
  exports: [
    VPftPageFR
  ]
})
export class VPftPageFRModule {}
