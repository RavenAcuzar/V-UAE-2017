import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform } from 'ionic-angular';
import { MarkPageTR } from '../mark-tr/mark-tr';
import { FaqsPageTR } from '../faqs-tr/faqs-tr';
import { DownloadsPage } from "../downloads/downloads";

@Component({
  selector: 'page-download',
  templateUrl: 'downloads-tr.html'
})
export class DownloadsPageTR extends DownloadsPage{
  FaqsPageTR = FaqsPageTR;
  MarkPageTR = MarkPageTR;

//  constructor(protected fileTransfer: FileTransfer, protected navCtrl: NavController,
//     protected platform: Platform, protected alertCtrl: AlertController, protected file: File,
//     protected fileOpener: FileOpener, protected loadingCtrl: LoadingController) {

//       super(fileTransfer, navCtrl, platform, alertCtrl,  file, fileOpener, loadingCtrl);
//   }

}
