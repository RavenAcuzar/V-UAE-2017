import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageID } from '../dubai101-id/dubai101-id';


@Component({
  selector: 'page-dubai101',
  templateUrl: 'howto-id.html'
})
export class HowtoPageID {
  Dubai101PageID = Dubai101PageID;


    @ViewChild(Content) content: Content;

    scrollToTop() {
      this.content.scrollToTop();
    }


  constructor() {

  }


}
