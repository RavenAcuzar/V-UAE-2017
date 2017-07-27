import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarkPageID } from '../mark-id/mark-id';
import { FaqsPageID } from '../faqs-id/faqs-id';


@Component({
  selector: 'page-download',
  templateUrl: 'downloads-id.html'
})
export class DownloadsPageID {
  FaqsPageID = FaqsPageID;
  MarkPageID = MarkPageID;

  constructor(public navCtrl: NavController) {

  }

}
