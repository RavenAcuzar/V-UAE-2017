import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPageFR } from '../news-fr/news-fr';

@NgModule({
  declarations: [
    NewsPageFR,
  ],
  imports: [
    IonicPageModule.forChild(NewsPageFR),
  ],
  exports: [
    NewsPageFR
  ]
})
export class NewsPageFRModule {}
