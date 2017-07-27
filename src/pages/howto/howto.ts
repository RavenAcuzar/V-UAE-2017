import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';


@Component({
  selector: 'page-dubai101',
  templateUrl: 'howto.html'
})
export class HowtoPage {
  Dubai101Page = Dubai101Page;


    @ViewChild(Content) content: Content;

    scrollToTop() {
      this.content.scrollToTop();
    }


  constructor() {

  }


}
