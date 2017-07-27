import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdwPageTR } from '../vp-dev-wadhwani-tr/vp-dev-wadhwani-tr';

@NgModule({
  declarations: [
    VPdwPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPdwPageTR),
  ],
  exports: [
    VPdwPageTR
  ]
})
export class VPdwPageTRModule {}
