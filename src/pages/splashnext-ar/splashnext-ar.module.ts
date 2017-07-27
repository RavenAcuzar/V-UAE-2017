import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashnextPageAR } from '../splashnext-ar/splashnext-ar';

@NgModule({
  declarations: [
    SplashnextPageAR,
  ],
  imports: [
    IonicPageModule.forChild(SplashnextPageAR),
  ],
  exports: [
    SplashnextPageAR
  ]
})
export class SplashnextPageARModule {}
