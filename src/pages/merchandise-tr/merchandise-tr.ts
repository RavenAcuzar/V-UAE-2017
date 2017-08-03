import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { MarkPageTR } from '../mark-tr/mark-tr';
import { MerchandisePage } from "../merchandise/merchandise";
import { Http } from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-tr.html'
})
export class MerchandisePageTR extends MerchandisePage{
Dubai101PageTR = Dubai101PageTR;
MarkPageTR = MarkPageTR;
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
