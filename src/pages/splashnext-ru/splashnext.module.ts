import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashnextPage } from '../splashnext/splashnext';

@NgModule({
  declarations: [
    SplashnextPage,
  ],
  imports: [
    IonicPageModule.forChild(SplashnextPage),
  ],
  exports: [
    SplashnextPage
  ]
})
export class SplashnextPageModule {}
