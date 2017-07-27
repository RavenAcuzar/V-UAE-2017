import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowtoPageID } from '../howto-id/howto-id';

@NgModule({
  declarations: [
    HowtoPageID,
  ],
  imports: [
    IonicPageModule.forChild(HowtoPageID),
  ],
  exports: [
    HowtoPageID
  ]
})
export class HowtoPageIDModule {}
