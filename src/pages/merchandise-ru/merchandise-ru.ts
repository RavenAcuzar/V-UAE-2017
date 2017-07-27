import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { MarkPageRU } from '../mark-ru/mark-ru';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-ru.html'
})
export class MerchandisePageRU {
Dubai101PageRU = Dubai101PageRU;
MarkPageRU = MarkPageRU;
constructor() {}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
