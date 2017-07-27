import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPksPageTR } from '../vp-kuna-senathirajah-tr/vp-kuna-senathirajah-tr';

@NgModule({
  declarations: [
    VPksPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPksPageTR),
  ],
  exports: [
    VPksPageTR
  ]
})
export class VPksPageTRModule {}
