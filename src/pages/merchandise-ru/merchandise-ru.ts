import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { MarkPageRU } from '../mark-ru/mark-ru';
import { MerchandisePage } from "../merchandise/merchandise";
import { Http } from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-ru.html'
})
export class MerchandisePageRU extends MerchandisePage {
Dubai101PageRU = Dubai101PageRU;
MarkPageRU = MarkPageRU;
constructor(protected http: Http, protected loadingController: LoadingController) {
  super(http,loadingController);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
