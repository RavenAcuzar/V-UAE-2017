import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'whereto-fr.html'
})
export class WheretoPageFR {
  Dubai101PageFR = Dubai101PageFR;
  constructor(public navCtrl: NavController) {

  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
