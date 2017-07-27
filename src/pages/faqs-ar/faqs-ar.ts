import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { DownloadsPageAR } from '../downloads-ar/downloads-ar';
import { ContactPageAR } from '../contact-ar/contact-ar';

@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs-ar.html'
})
export class FaqsPageAR {
  DownloadsPageAR = DownloadsPageAR;
  ContactPageAR = ContactPageAR;
  constructor(public navCtrl: NavController) { }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
