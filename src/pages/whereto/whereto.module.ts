import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheretoPage } from '../whereto/whereto';

@NgModule({
  declarations: [
    WheretoPage,
  ],
  imports: [
    IonicPageModule.forChild(WheretoPage),
  ],
  exports: [
    WheretoPage
  ]
})
export class WheretoPageModule {}
