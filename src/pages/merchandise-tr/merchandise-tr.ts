import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { MarkPageTR } from '../mark-tr/mark-tr';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-tr.html'
})
export class MerchandisePageTR {
Dubai101PageTR = Dubai101PageTR;
MarkPageTR = MarkPageTR;
constructor() {}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
