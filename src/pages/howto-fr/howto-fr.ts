import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';


@Component({
  selector: 'page-dubai101',
  templateUrl: 'howto-fr.html'
})
export class HowtoPageFR {
  Dubai101PageFR = Dubai101PageFR;


    @ViewChild(Content) content: Content;

    scrollToTop() {
      this.content.scrollToTop();
    }


  constructor() {

  }


}
