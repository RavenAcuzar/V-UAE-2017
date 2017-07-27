import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheretoPageRU } from '../whereto-ru/whereto-ru';

@NgModule({
  declarations: [
    WheretoPageRU,
  ],
  imports: [
    IonicPageModule.forChild(WheretoPageRU),
  ],
  exports: [
    WheretoPageRU
  ]
})
export class WheretoPageRUModule {}
