import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import { MerchandisePageFR } from '../merchandise-fr/merchandise-fr';
import { DownloadsPageFR } from '../downloads-fr/downloads-fr';
import { MarkPage } from "../mark/mark";
import { Http } from "@angular/http";
import { Crop } from "@ionic-native/crop";
import { Camera } from "@ionic-native/camera";
import { PhotoLibrary } from "@ionic-native/photo-library";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";


@Component({
  selector: 'page-mark',
  templateUrl: 'mark-fr.html'
})
export class MarkPageFR extends MarkPage {
  DownloadsPageFR = DownloadsPageFR;
  MerchandisePageFR = MerchandisePageFR;

  constructor(
    protected platform: Platform,
    protected navCtrl: NavController,
    protected base64ToGallery: Base64ToGallery,
    protected socialSharing: SocialSharing,
    protected loading: LoadingController,
    protected photoLibrary: PhotoLibrary,
    protected alert: AlertController,
    protected camera: Camera,
    protected crop: Crop
  ) {
    super(platform, navCtrl, base64ToGallery, socialSharing, loading,
      photoLibrary, alert, camera, crop);
  }
}
