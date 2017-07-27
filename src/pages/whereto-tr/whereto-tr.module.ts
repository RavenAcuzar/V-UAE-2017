import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheretoPageTR } from '../whereto-tr/whereto-tr';

@NgModule({
  declarations: [
    WheretoPageTR,
  ],
  imports: [
    IonicPageModule.forChild(WheretoPageTR),
  ],
  exports: [
    WheretoPageTR
  ]
})
export class WheretoPageTRModule {}
