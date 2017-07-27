import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchandisePageAR } from '../merchandise-ar/merchandise-ar';

@NgModule({
  declarations: [
    MerchandisePageAR,
  ],
  imports: [
    IonicPageModule.forChild(MerchandisePageAR),
  ],
  exports: [
    MerchandisePageAR
  ]
})
export class MerchandisePageARModule {}
