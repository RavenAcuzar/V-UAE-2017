import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowtoPageFR } from '../howto-fr/howto-fr';

@NgModule({
  declarations: [
    HowtoPageFR,
  ],
  imports: [
    IonicPageModule.forChild(HowtoPageFR),
  ],
  exports: [
    HowtoPageFR
  ]
})
export class HowtoPageFRModule {}
