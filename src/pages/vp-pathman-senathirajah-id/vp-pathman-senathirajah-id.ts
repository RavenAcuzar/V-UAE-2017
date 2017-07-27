import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPagPageID } from '../vp-arun-george-id/vp-arun-george-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-pathman-senathirajah-id.html'
})
export class VPpsPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPagPageID = VPagPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
