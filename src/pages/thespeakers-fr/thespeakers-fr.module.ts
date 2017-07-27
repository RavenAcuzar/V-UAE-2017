import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';

@NgModule({
  declarations: [
    TheSpeakersPageFR,
  ],
  imports: [
    IonicPageModule.forChild(TheSpeakersPageFR),
  ],
  exports: [
    TheSpeakersPageFR
  ]
})
export class TheSpeakersPageFRModule {}
