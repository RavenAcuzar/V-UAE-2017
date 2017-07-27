import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';


@Component({
  selector: 'page-dubai101',
  templateUrl: 'howto-ar.html'
})
export class HowtoPageAR {
  Dubai101PageAR = Dubai101PageAR;


    @ViewChild(Content) content: Content;

    scrollToTop() {
      this.content.scrollToTop();
    }


  constructor() {

  }


}
