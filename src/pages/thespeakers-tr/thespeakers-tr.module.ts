import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';

@NgModule({
  declarations: [
    TheSpeakersPageTR,
  ],
  imports: [
    IonicPageModule.forChild(TheSpeakersPageTR),
  ],
  exports: [
    TheSpeakersPageTR
  ]
})
export class TheSpeakersPageTRModule {}
