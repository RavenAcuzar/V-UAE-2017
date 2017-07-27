import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashnextPageTR } from '../splashnext-tr/splashnext-tr';

@NgModule({
  declarations: [
    SplashnextPageTR,
  ],
  imports: [
    IonicPageModule.forChild(SplashnextPageTR),
  ],
  exports: [
    SplashnextPageTR
  ]
})
export class SplashnextPageTRModule {}
