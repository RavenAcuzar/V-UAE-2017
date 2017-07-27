import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarkPageRU } from '../mark-ru/mark-ru';
import { FaqsPageRU } from '../faqs-ru/faqs-ru';


@Component({
  selector: 'page-download',
  templateUrl: 'downloads-ru.html'
})
export class DownloadsPageRU {
  FaqsPageRU = FaqsPageRU;
  MarkPageRU = MarkPageRU;

  constructor(public navCtrl: NavController) {

  }

}
