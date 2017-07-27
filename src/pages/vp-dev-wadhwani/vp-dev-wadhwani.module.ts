import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdwPage } from '../vp-dev-wadhwani/vp-dev-wadhwani';

@NgModule({
  declarations: [
    VPdwPage,
  ],
  imports: [
    IonicPageModule.forChild(VPdwPage),
  ],
  exports: [
    VPdwPage
  ]
})
export class VPdwPageModule {}
