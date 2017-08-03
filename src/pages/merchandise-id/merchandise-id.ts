import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Dubai101PageID } from '../dubai101-id/dubai101-id';
import { MarkPageID } from '../mark-id/mark-id';
import { MerchandisePage } from "../merchandise/merchandise";
import { Http } from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-id.html'
})
export class MerchandisePageID extends MerchandisePage {
Dubai101PageID = Dubai101PageID;
MarkPageID = MarkPageID;
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
