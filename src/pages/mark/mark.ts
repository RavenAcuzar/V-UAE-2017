import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import { MerchandisePage } from '../merchandise/merchandise';
import { DownloadsPage } from '../downloads/downloads';
import { FileChooser } from "@ionic-native/file-chooser";
import { Http } from "@angular/http";
import { FileTransferObject, FileTransfer } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";

@Component({
  selector: 'page-mark',
  templateUrl: 'mark.html'
})
export class MarkPage {
  @ViewChild('inputImage') inputImage: ElementRef;

  DownloadsPage = DownloadsPage;
  MerchandisePage = MerchandisePage;
  filename : string;
  ss: boolean = false;
  badge: string = ''; // id of the badge
  chosenFilePath: string = '';
  badgeImageIsReady: boolean = false;
  badgeImagePath: string;
  badgeImageId: string;

  fileTransferObject: FileTransferObject;
  downloadLocation: string;
  canDownload: boolean;

  constructor(protected fileChooser: FileChooser, protected http: Http,
    protected fileTransfer: FileTransfer, protected platform: Platform,
    protected file: File, protected loadingCtrl: LoadingController,
    protected alertCtrl: AlertController, protected fileOpener: FileOpener) {
  }

  ionViewDidLoad() {
    this.fileTransferObject = this.fileTransfer.create();
    if (this.platform.is('cordova')) {
      if (this.platform.is('ios')) {
        this.downloadLocation = this.file.dataDirectory;
        this.canDownload = true;
      } else if (this.platform.is('android')) {
        this.downloadLocation = this.file.externalDataDirectory;
        this.canDownload = true;
      }
    } else {
      if (this.platform.is('core') || this.platform.is('mobileweb') || this.platform.is('windows')) {
        this.downloadLocation = this.file.dataDirectory;
        this.canDownload = true;
      } else {
        this.canDownload = false;
      }
    }
  }

  badgeValueChanged() {
    
    if(this.ss){

    let loadingPopUp = this.loadingCtrl.create({
      content: 'Processing your image...'
    });
    loadingPopUp.present();

    let guid = this.createGuid();
    let formData = new FormData();
    formData.append("UploadedImage", this.chosenFilePath);
    formData.append("type", "coverbadge");
    formData.append("action", guid);
    formData.append("badge", this.badge);

    this.http.post('http://cums.the-v.net/app_site.aspx', formData, {}).subscribe((response) => {
      this.badgeImagePath = "http://cums.the-v.net/app_site.aspx?id=" + guid + ".jpeg";
      this.badgeImageIsReady = true;
      loadingPopUp.dismiss();
    }, e => {
      this.badgeImageIsReady = false;
      let alert = this.alertCtrl.create({
        title: 'Error occurred!',
        subTitle: 'Cannot place the badge on your image. Please try again.',
        buttons: [{
          text: 'Ok',
          handler: () => {
            alert.dismiss();
            return false;
          }
        }],
        cssClass:'alertDanger'
      });
      alert.present();
      loadingPopUp.dismiss();
    });
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Error occurred!',
        subTitle: 'No Photo selected.',
        buttons: [{
          text: 'Ok',
          handler: () => {
            alert.dismiss();
            return false;
          }
        }],
        cssClass:'alertDanger'
      });
      alert.present();
    }
  }

  inputImageChanged(event) {
    this.chosenFilePath = event.target.files[0];
    //console.log(JSON.stringify(this.chosenFilePath));
    this.ss=true;
    this.filename=event.target.files[0].name;

  }

  downloadImage() {
    if (!this.canDownload) {
      let alert = this.alertCtrl.create({
        title: 'Cannot download!',
        subTitle: 'Your platform is not supported.',
        buttons: [{
          text: 'Ok',
          handler: () => {
            alert.dismiss();
            return false;
          }
        }],
        cssClass:'alertDanger'
      });
      alert.present();

    } else {
      if (this.badgeImageIsReady) {
        let filename = "/BadgeImage.png";
        let folderLocation = "VUAE2017/";
        let fileDestination = this.downloadLocation + folderLocation + filename;

        this.file.checkDir(this.downloadLocation, folderLocation).then(_ => {
          this.downloadFile(fileDestination, this.badgeImagePath);
        }).catch(e => {
          this.file.createDir(this.downloadLocation, folderLocation, false).then(_ => {
            this.downloadFile(fileDestination, this.badgeImagePath);
          }).catch(this.onErrorWithWallpaperDownload);
        });
      }
    }

  }

  createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  private downloadFile(fileDestination: string, url: string) {
    let loadingPopup = this.loadingCtrl.create({
      content: 'Downloading...'
    });
    loadingPopup.present();

    this.fileTransferObject.download(url, fileDestination, true).then((entry) => {
      loadingPopup.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Download successful!',
        subTitle: 'Hooray! Click \'Open\' to view your marked photo.',
        buttons: [
          {
            text: 'Open',
            handler: () => {
              entry.file((file) => {
                this.fileOpener.open(entry.toURL(), file.type)
                  .then(() => {
                    alert.dismiss();
                    return false;
                  })
                  .catch(e => {
                    alert.dismiss();
                    this.onErrorWithWallpaperDownload(e);
                  });
              }, e => {
                alert.dismiss();
                this.onErrorWithWallpaperDownload(e);
              });
            }
          }, {
            text: 'Ok',
            handler: () => {
              alert.dismiss();
              return false;
            }
          }
        ],
        cssClass:'alert'
      });
      alert.present();
    }).catch((error) => {
      loadingPopup.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Error occurred!',
        subTitle: 'Your marked photo was not downloaded successfully. Please try again.',
        buttons: [{
          text: 'Ok',
          handler: () => {
            alert.dismiss();
            return false;
          }
        }],
        cssClass:'alertDanger'
      });
      alert.present();
    });
  }

  private onErrorWithWallpaperDownload(error) {
    let alert = this.alertCtrl.create({
      title: 'Error occurred!',
      subTitle: 'Cannot open your badged image. Please try again.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          alert.dismiss();
          return false;
        }
      }],
      cssClass:'alertDanger'
    });
  }
}
