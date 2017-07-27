import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { DownloadsPageID } from '../downloads-id/downloads-id';
import { ContactPageID } from '../contact-id/contact-id';

@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs-id.html'
})
export class FaqsPageID {
  DownloadsPageID = DownloadsPageID;
  ContactPageID = ContactPageID;
  constructor(public navCtrl: NavController) { }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
