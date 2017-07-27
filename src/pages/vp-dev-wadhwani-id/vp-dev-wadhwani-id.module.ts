import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-wadhwani-id.html'
})
export class VPdwPageID {
  TheSpeakersPageID = TheSpeakersPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
