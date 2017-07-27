import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPrsPageTR } from '../vp-ranjit-singh-tr/vp-ranjit-singh-tr';

@NgModule({
  declarations: [
    VPrsPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPrsPageTR),
  ],
  exports: [
    VPrsPageTR
  ]
})
export class VPrsPageTRModule {}
