import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslandingPageFR } from '../newslanding-fr/newslanding-fr';

@NgModule({
  declarations: [
    NewslandingPageFR,
  ],
  imports: [
    IonicPageModule.forChild(NewslandingPageFR),
  ],
  exports: [
    NewslandingPageFR
  ]
})
export class NewslandingPageFRModule {}
