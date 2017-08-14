import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController } from 'ionic-angular';
import { MarkPageFR } from '../mark-fr/mark-fr';
import { FaqsPageFR } from '../faqs-fr/faqs-fr';
import { DownloadsPage } from "../downloads/downloads";


@Component({
  selector: 'page-download',
  templateUrl: 'downloads-fr.html'
})
export class DownloadsPageFR extends DownloadsPage{
  FaqsPageFR = FaqsPageFR;
  MarkPageFR = MarkPageFR;

//  constructor(protected fileTransfer: FileTransfer, protected navCtrl: NavController,
//     protected platform: Platform, protected alertCtrl: AlertController, protected file: File,
//     protected fileOpener: FileOpener, protected loadingCtrl: LoadingController) {

//       super(fileTransfer, navCtrl, platform, alertCtrl,  file, fileOpener, loadingCtrl);
//   }

}
