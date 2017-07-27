import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPagPage } from '../vp-arun-george/vp-arun-george';

@NgModule({
  declarations: [
    VPagPage,
  ],
  imports: [
    IonicPageModule.forChild(VPagPage),
  ],
  exports: [
    VPagPage
  ]
})
export class VPagPageModule {}
