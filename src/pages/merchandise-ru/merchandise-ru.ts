import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { MarkPageRU } from '../mark-ru/mark-ru';
import { MerchandisePage } from "../merchandise/merchandise";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-ru.html'
})
export class MerchandisePageRU extends MerchandisePage {
Dubai101PageRU = Dubai101PageRU;
MarkPageRU = MarkPageRU;
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
