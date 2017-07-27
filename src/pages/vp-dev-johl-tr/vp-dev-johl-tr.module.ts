import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdjPageTR } from '../vp-dev-johl-tr/vp-dev-johl-tr';

@NgModule({
  declarations: [
    VPdjPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPdjPageTR),
  ],
  exports: [
    VPdjPageTR
  ]
})
export class VPdjPageTRModule {}
