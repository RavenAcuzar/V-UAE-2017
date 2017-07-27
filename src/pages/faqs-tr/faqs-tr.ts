import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { DownloadsPageTR } from '../downloads-tr/downloads-tr';
import { ContactPageTR } from '../contact-tr/contact-tr';

@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs-tr.html'
})
export class FaqsPageTR {
  DownloadsPageTR = DownloadsPageTR;
  ContactPageTR = ContactPageTR;
  constructor(public navCtrl: NavController) { }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
