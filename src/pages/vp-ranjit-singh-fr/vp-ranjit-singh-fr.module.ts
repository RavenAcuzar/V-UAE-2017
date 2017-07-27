import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPrsPageFR } from '../vp-ranjit-singh-fr/vp-ranjit-singh-fr';

@NgModule({
  declarations: [
    VPrsPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VPrsPageFR),
  ],
  exports: [
    VPrsPageFR
  ]
})
export class VPrsPageFRModule {}
