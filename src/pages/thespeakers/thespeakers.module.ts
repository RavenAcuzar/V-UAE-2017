import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';

@NgModule({
  declarations: [
    TheSpeakersPage,
  ],
  imports: [
    IonicPageModule.forChild(TheSpeakersPage),
  ],
  exports: [
    TheSpeakersPage
  ]
})
export class TheSpeakersPageModule {}
