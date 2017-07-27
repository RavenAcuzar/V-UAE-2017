import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPageTR } from '../news-tr/news-tr';

@NgModule({
  declarations: [
    NewsPageTR,
  ],
  imports: [
    IonicPageModule.forChild(NewsPageTR),
  ],
  exports: [
    NewsPageTR
  ]
})
export class NewsPageTRModule {}
