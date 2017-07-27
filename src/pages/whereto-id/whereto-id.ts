import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageID } from '../dubai101-id/dubai101-id';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'whereto-id.html'
})
export class WheretoPageID {
  Dubai101PageID = Dubai101PageID;
  constructor(public navCtrl: NavController) {

  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
