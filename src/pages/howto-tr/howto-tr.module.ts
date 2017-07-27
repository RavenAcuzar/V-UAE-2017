import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowtoPageTR } from '../howto-tr/howto-tr';

@NgModule({
  declarations: [
    HowtoPageTR,
  ],
  imports: [
    IonicPageModule.forChild(HowtoPageTR),
  ],
  exports: [
    HowtoPageTR
  ]
})
export class HowtoPageTRModule {}
