import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPmqPageID } from '../vp-dr-motaz-qais-id/vp-dr-motaz-qais-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-mahendra-kumar-id.html'
})
export class VPmkPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPmqPageID = VPmqPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
