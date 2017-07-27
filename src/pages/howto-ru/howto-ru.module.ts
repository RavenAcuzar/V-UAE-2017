import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowtoPageRU } from '../howto-ru/howto-ru';

@NgModule({
  declarations: [
    HowtoPageRU,
  ],
  imports: [
    IonicPageModule.forChild(HowtoPageRU),
  ],
  exports: [
    HowtoPageRU
  ]
})
export class HowtoPageRUModule {}
