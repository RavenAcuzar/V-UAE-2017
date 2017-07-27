import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPksPageID } from '../vp-kuna-senathirajah-id/vp-kuna-senathirajah-id';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ranjit-singh-id.html'
})
export class VPrsPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPksPageID = VPksPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
