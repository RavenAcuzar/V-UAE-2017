import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowtoPageAR } from '../howto-ar/howto-ar';

@NgModule({
  declarations: [
    HowtoPageAR,
  ],
  imports: [
    IonicPageModule.forChild(HowtoPageAR),
  ],
  exports: [
    HowtoPageAR
  ]
})
export class HowtoPageARModule {}
