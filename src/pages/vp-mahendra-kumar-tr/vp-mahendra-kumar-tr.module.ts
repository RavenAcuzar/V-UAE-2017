import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmkPageTR } from '../vp-mahendra-kumar-tr/vp-mahendra-kumar-tr';

@NgModule({
  declarations: [
    VPmkPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPmkPageTR),
  ],
  exports: [
    VPmkPageTR
  ]
})
export class VPmkPageTRModule {}
