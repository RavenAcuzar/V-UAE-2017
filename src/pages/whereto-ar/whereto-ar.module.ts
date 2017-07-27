import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheretoPageAR } from '../whereto-ar/whereto-ar';

@NgModule({
  declarations: [
    WheretoPageAR,
  ],
  imports: [
    IonicPageModule.forChild(WheretoPageAR),
  ],
  exports: [
    WheretoPageAR
  ]
})
export class WheretoPageARModule {}
