import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashnextPageID } from '../splashnext-id/splashnext-id';

@NgModule({
  declarations: [
    SplashnextPageID,
  ],
  imports: [
    IonicPageModule.forChild(SplashnextPageID),
  ],
  exports: [
    SplashnextPageID
  ]
})
export class SplashnextPageIDModule {}
