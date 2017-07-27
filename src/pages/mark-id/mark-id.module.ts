import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkPageID } from '../mark-id/mark-id';

@NgModule({
  declarations: [
    MarkPageID,
  ],
  imports: [
    IonicPageModule.forChild(MarkPageID),
  ],
  exports: [
    MarkPageID
  ]
})
export class MarkPageIDModule {}
