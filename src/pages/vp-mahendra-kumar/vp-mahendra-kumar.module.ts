import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmkPage } from '../vp-mahendra-kumar/vp-mahendra-kumar';

@NgModule({
  declarations: [
    VPmkPage,
  ],
  imports: [
    IonicPageModule.forChild(VPmkPage),
  ],
  exports: [
    VPmkPage
  ]
})
export class VPmkPageModule {}
