import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'whereto-tr.html'
})
export class WheretoPageTR {
  Dubai101PageTR = Dubai101PageTR;
  constructor(public navCtrl: NavController) {

  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
