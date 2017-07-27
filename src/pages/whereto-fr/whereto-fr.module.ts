import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheretoPageFR } from '../whereto-fr/whereto-fr';

@NgModule({
  declarations: [
    WheretoPageFR,
  ],
  imports: [
    IonicPageModule.forChild(WheretoPageFR),
  ],
  exports: [
    WheretoPageFR
  ]
})
export class WheretoPageFRModule {}
