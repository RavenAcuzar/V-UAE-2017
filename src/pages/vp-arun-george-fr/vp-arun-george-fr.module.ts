import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPagPageFR } from '../vp-arun-george-fr/vp-arun-george-fr';

@NgModule({
  declarations: [
    VPagPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPagPageFR),
  ],
  exports: [
    VPagPageFR
  ]
})
export class VPagPageFRModule {}
