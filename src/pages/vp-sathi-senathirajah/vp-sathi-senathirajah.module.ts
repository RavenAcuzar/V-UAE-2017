import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPssPage } from '../vp-sathi-senathirajah/vp-sathi-senathirajah';

@NgModule({
  declarations: [
    VPssPage,
  ],
  imports: [
    IonicPageModule.forChild(VPssPage),
  ],
  exports: [
    VPssPage
  ]
})
export class VPssPageModule {}
