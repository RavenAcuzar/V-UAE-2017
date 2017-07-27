import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchandisePage } from '../merchandise/merchandise';

@NgModule({
  declarations: [
    MerchandisePage,
  ],
  imports: [
    IonicPageModule.forChild(MerchandisePage),
  ],
  exports: [
    MerchandisePage
  ]
})
export class MerchandisePageModule {}
