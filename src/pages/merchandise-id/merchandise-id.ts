import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageID } from '../dubai101-id/dubai101-id';
import { MarkPageID } from '../mark-id/mark-id';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-id.html'
})
export class MerchandisePageID {
Dubai101PageID = Dubai101PageID;
MarkPageID = MarkPageID;
constructor() {}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
