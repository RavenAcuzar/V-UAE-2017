import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';

@NgModule({
  declarations: [
    TheSpeakersPageID,
  ],
  imports: [
    IonicPageModule.forChild(TheSpeakersPageID),
  ],
  exports: [
    TheSpeakersPageID
  ]
})
export class TheSpeakersPageIDModule {}
