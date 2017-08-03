import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import { MerchandisePageTR } from '../merchandise-tr/merchandise-tr';
import { DownloadsPageTR } from '../downloads-tr/downloads-tr';
import { MarkPage } from "../mark/mark";
import { FileChooser } from "@ionic-native/file-chooser";
import { Http } from "@angular/http";
import { File } from "@ionic-native/file";
import { FileTransfer } from "@ionic-native/file-transfer";
import { FileOpener } from "@ionic-native/file-opener";

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-tr.html'
})
export class MarkPageTR extends MarkPage{
DownloadsPageTR = DownloadsPageTR;
MerchandisePageTR = MerchandisePageTR;
constructor(protected fileChooser: FileChooser, protected http: Http,
    protected fileTransfer: FileTransfer, protected platform: Platform,
    protected file: File, protected loadingCtrl: LoadingController,
    protected alertCtrl: AlertController, protected fileOpener: FileOpener) {

      super(fileChooser,http,fileTransfer, platform,file,loadingCtrl,alertCtrl,fileOpener);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MarkPage');
}

}
