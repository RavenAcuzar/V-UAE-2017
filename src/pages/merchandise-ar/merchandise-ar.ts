import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';
import { MarkPageAR } from '../mark-ar/mark-ar';
import { MerchandisePage } from "../merchandise/merchandise";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-ar.html'
})
export class MerchandisePageAR extends MerchandisePage{
Dubai101PageAR = Dubai101PageAR;
MarkPageAR = MarkPageAR;

constructor(protected http: Http, protected loadingController: LoadingController,
protected toastCtrl: ToastController,protected network: Network,protected connectionSvc: ConnectionService) {
  super(http,loadingController,toastCtrl,network, connectionSvc);
}


ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
