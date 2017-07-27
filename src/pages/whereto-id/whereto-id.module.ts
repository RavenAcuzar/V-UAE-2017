import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheretoPageID } from '../whereto-id/whereto-id';

@NgModule({
  declarations: [
    WheretoPageID,
  ],
  imports: [
    IonicPageModule.forChild(WheretoPageID),
  ],
  exports: [
    WheretoPageID
  ]
})
export class WheretoPageIDModule {}
