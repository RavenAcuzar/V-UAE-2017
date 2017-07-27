import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';

@NgModule({
  declarations: [
    TheSpeakersPageRU,
  ],
  imports: [
    IonicPageModule.forChild(TheSpeakersPageRU),
  ],
  exports: [
    TheSpeakersPageRU
  ]
})
export class TheSpeakersPageRUModule {}
