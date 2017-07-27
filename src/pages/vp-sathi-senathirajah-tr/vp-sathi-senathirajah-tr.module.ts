import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPssPageTR } from '../vp-sathi-senathirajah-tr/vp-sathi-senathirajah-tr';

@NgModule({
  declarations: [
    VPssPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPssPageTR),
  ],
  exports: [
    VPssPageTR
  ]
})
export class VPssPageTRModule {}
