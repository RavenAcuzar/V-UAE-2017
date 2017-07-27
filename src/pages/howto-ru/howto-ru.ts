import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';


@Component({
  selector: 'page-dubai101',
  templateUrl: 'howto-ru.html'
})
export class HowtoPageRU {
  Dubai101PageRU = Dubai101PageRU;


    @ViewChild(Content) content: Content;

    scrollToTop() {
      this.content.scrollToTop();
    }


  constructor() {

  }


}
