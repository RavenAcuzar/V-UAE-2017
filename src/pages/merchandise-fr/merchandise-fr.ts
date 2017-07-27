import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';
import { MarkPageFR } from '../mark-fr/mark-fr';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-fr.html'
})
export class MerchandisePageFR {
Dubai101PageFR = Dubai101PageFR;
MarkPageFR = MarkPageFR;
constructor() {}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
