import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPftPage } from '../vp-ferdie-tolentino/vp-ferdie-tolentino';

@NgModule({
  declarations: [
    VPftPage,
  ],
  imports: [
    IonicPageModule.forChild(VPftPage),
  ],
  exports: [
    VPftPage
  ]
})
export class VPftPageModule {}
