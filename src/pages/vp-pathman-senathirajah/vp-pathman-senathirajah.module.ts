import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPpsPage } from '../vp-pathman-senathirajah/vp-pathman-senathirajah';

@NgModule({
  declarations: [
    VPpsPage,
  ],
  imports: [
    IonicPageModule.forChild(VPpsPage),
  ],
  exports: [
    VPpsPage
  ]
})
export class VPpsPageModule {}
