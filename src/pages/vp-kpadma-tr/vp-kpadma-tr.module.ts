import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPkpPageTR } from '../vp-kpadma-tr/vp-kpadma-tr';

@NgModule({
  declarations: [
    VPkpPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPkpPageTR),
  ],
  exports: [
    VPkpPageTR
  ]
})
export class VPkpPageTRModule {}
