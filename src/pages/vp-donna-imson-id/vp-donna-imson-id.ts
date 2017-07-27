import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPrsPageID } from '../vp-ranjit-singh-id/vp-ranjit-singh-id';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-donna-imson-id.html'
})
export class VPdiPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPrsPageID = VPrsPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
