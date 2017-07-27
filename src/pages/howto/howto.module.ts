import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowtoPage } from '../howto/howto';

@NgModule({
  declarations: [
    HowtoPage,
  ],
  imports: [
    IonicPageModule.forChild(HowtoPage),
  ],
  exports: [
    HowtoPage
  ]
})
export class HowtoPageModule {}
