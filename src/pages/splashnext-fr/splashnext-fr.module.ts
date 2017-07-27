import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashnextPageFR } from '../splashnext-fr/splashnext-fr';

@NgModule({
  declarations: [
    SplashnextPageFR,
  ],
  imports: [
    IonicPageModule.forChild(SplashnextPageFR),
  ],
  exports: [
    SplashnextPageFR
  ]
})
export class SplashnextPageFRModule {}
