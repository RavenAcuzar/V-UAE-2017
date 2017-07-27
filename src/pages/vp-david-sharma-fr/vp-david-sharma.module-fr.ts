import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdsPageFR } from '../vp-david-sharma-fr/vp-david-sharma-fr';

@NgModule({
  declarations: [
    VPdsPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPdsPageFR),
  ],
  exports: [
    VPdsPageFR
  ]
})
export class VPdsPageFRModule {}
