import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPksPageAR } from '../vp-kuna-senathirajah-ar/vp-kuna-senathirajah-ar';

@NgModule({
  declarations: [
    VPksPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPksPageAR),
  ],
  exports: [
    VPksPageAR
  ]
})
export class VPksPageARModule {}
