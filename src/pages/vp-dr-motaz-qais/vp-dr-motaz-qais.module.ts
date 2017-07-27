import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmqPage } from '../vp-dr-motaz-qais/vp-dr-motaz-qais';

@NgModule({
  declarations: [
    VPmqPage,
  ],
  imports: [
    IonicPageModule.forChild(VPmqPage),
  ],
  exports: [
    VPmqPage
  ]
})
export class VPmqPageModule {}
