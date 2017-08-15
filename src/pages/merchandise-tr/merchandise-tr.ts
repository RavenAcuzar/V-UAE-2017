import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { MarkPageTR } from '../mark-tr/mark-tr';
import { MerchandisePage } from "../merchandise/merchandise";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-tr.html'
})
export class MerchandisePageTR extends MerchandisePage{
Dubai101PageTR = Dubai101PageTR;
MarkPageTR = MarkPageTR;
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
