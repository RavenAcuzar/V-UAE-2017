import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslandingPage } from '../newslanding/newslanding';

@NgModule({
  declarations: [
    NewslandingPage,
  ],
  imports: [
    IonicPageModule.forChild(NewslandingPage),
  ],
  exports: [
    NewslandingPage
  ]
})
export class NewslandingPageModule {}
