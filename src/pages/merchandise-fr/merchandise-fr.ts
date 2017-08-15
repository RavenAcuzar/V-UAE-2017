import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';
import { MarkPageFR } from '../mark-fr/mark-fr';
import { MerchandisePage } from "../merchandise/merchandise";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-fr.html'
})
export class MerchandisePageFR extends MerchandisePage {
Dubai101PageFR = Dubai101PageFR;
MarkPageFR = MarkPageFR;
constructor(protected http: Http, protected loadingController: LoadingController,
protected toastCtrl: ToastController,protected network: Network) {
  super(http,loadingController,toastCtrl,network);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
