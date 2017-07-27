import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'whereto-ru.html'
})
export class WheretoPageRU {
  Dubai101PageRU = Dubai101PageRU;
  constructor(public navCtrl: NavController) {

  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
