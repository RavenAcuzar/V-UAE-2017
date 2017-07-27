import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdsPageTR } from '../vp-david-sharma-tr/vp-david-sharma-tr';

@NgModule({
  declarations: [
    VPdsPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VPdsPageTR),
  ],
  exports: [
    VPdsPageTR
  ]
})
export class VPdsPageTRModule {}
