import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPpsPageID } from '../vp-pathman-senathirajah-id/vp-pathman-senathirajah-id';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kuna-senathirajah-id.html'
})
export class VPksPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPpsPageID = VPpsPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
