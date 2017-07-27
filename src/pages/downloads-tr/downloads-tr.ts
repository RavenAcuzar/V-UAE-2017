import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarkPageTR } from '../mark-tr/mark-tr';
import { FaqsPageTR } from '../faqs-tr/faqs-tr';


@Component({
  selector: 'page-download',
  templateUrl: 'downloads-tr.html'
})
export class DownloadsPageTR {
  FaqsPageTR = FaqsPageTR;
  MarkPageTR = MarkPageTR;

  constructor(public navCtrl: NavController) {

  }

}
