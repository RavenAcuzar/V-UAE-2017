import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';

@NgModule({
  declarations: [
    TheSpeakersPageAR,
  ],
  imports: [
    IonicPageModule.forChild(TheSpeakersPageAR),
  ],
  exports: [
    TheSpeakersPageAR
  ]
})
export class TheSpeakersPageARModule {}
