import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, LoadingController } from 'ionic-angular';
import { MarkPageAR } from '../mark-ar/mark-ar';
import { FaqsPageAR } from '../faqs-ar/faqs-ar';
import { DownloadsPage } from "../downloads/downloads";


@Component({
  selector: 'page-download',
  templateUrl: 'downloads-ar.html'
})
export class DownloadsPageAR extends DownloadsPage{
  FaqsPageAR = FaqsPageAR;
  MarkPageAR = MarkPageAR;

  // constructor(protected fileTransfer: FileTransfer, protected navCtrl: NavController,
  //   protected platform: Platform, protected alertCtrl: AlertController, protected file: File,
  //   protected fileOpener: FileOpener, protected loadingCtrl: LoadingController) {

  //     super(fileTransfer, navCtrl, platform, alertCtrl,  file, fileOpener, loadingCtrl);
  // }

}
