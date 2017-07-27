import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarkPageFR } from '../mark-fr/mark-fr';
import { FaqsPageFR } from '../faqs-fr/faqs-fr';


@Component({
  selector: 'page-download',
  templateUrl: 'downloads-fr.html'
})
export class DownloadsPageFR {
  FaqsPageFR = FaqsPageFR;
  MarkPageFR = MarkPageFR;

  constructor(public navCtrl: NavController) {

  }

}
