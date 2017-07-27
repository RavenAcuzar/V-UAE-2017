import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPksPage } from '../vp-kuna-senathirajah/vp-kuna-senathirajah';

@NgModule({
  declarations: [
    VPksPage,
  ],
  imports: [
    IonicPageModule.forChild(VPksPage),
  ],
  exports: [
    VPksPage
  ]
})
export class VPksPageModule {}
