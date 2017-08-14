import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';
import { MarkPageAR } from '../mark-ar/mark-ar';
import { MerchandisePage } from "../merchandise/merchandise";
import { Http } from "@angular/http";

 
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-ar.html'
})
export class MerchandisePageAR extends MerchandisePage{
Dubai101PageAR = Dubai101PageAR;
MarkPageAR = MarkPageAR;

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
