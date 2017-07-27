import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarkPageAR } from '../mark-ar/mark-ar';
import { FaqsPageAR } from '../faqs-ar/faqs-ar';


@Component({
  selector: 'page-download',
  templateUrl: 'downloads-ar.html'
})
export class DownloadsPageAR {
  FaqsPageAR = FaqsPageAR;
  MarkPageAR = MarkPageAR;

  constructor(public navCtrl: NavController) {

  }

}
