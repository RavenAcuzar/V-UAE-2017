import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPftPageTR } from '../vp-ferdie-tolentino-tr/vp-ferdie-tolentino-tr';

@NgModule({
  declarations: [
    VPftPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPftPageTR),
  ],
  exports: [
    VPftPageTR
  ]
})
export class VPftPageTRModule {}
