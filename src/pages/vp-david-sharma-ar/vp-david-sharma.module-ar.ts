import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdsPageAR } from '../vp-david-sharma-ar/vp-david-sharma-ar';

@NgModule({
  declarations: [
    VPdsPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPdsPageAR),
  ],
  exports: [
    VPdsPageAR
  ]
})
export class VPdsPageARModule {}
