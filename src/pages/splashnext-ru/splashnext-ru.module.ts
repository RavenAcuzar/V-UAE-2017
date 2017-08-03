import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SplashnextPageRU} from "./splashnext-ru";

@NgModule({
  declarations: [
    SplashnextPageRU,
  ],
  imports: [
    IonicPageModule.forChild(SplashnextPageRU),
  ],
  exports: [
    SplashnextPageRU
  ]
})
export class SplashnextPageRUModule {}
