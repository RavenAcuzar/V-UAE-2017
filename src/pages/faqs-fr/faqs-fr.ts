import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { DownloadsPageFR } from '../downloads-fr/downloads-fr';
import { ContactPageFR } from '../contact-fr/contact-fr';

@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs-fr.html'
})
export class FaqsPageFR {
  DownloadsPageFR = DownloadsPageFR;
  ContactPageFR = ContactPageFR;
  constructor(public navCtrl: NavController) { }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
