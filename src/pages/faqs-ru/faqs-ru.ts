import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { DownloadsPageRU } from '../downloads-ru/downloads-ru';
import { ContactPageRU } from '../contact-ru/contact-ru';

@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs-ru.html'
})
export class FaqsPageRU {
  DownloadsPageRU = DownloadsPageRU;
  ContactPageRU = ContactPageRU;
  constructor(public navCtrl: NavController) { }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
