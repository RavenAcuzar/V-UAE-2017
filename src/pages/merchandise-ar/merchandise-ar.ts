import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';
import { MarkPageAR } from '../mark-ar/mark-ar';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-ar.html'
})
export class MerchandisePageAR {
Dubai101PageAR = Dubai101PageAR;
MarkPageAR = MarkPageAR;
constructor() {}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
