import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPrsPageTR } from '../vp-ranjit-singh-tr/vp-ranjit-singh-tr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-donna-imson-tr.html'
})
export class VPdiPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPrsPageTR = VPrsPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
