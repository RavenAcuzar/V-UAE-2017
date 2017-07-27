import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPmkPageTR } from '../vp-mahendra-kumar-tr/vp-mahendra-kumar-tr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-david-sharma-tr.html'
})
export class VPdsPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPmkPageTR = VPmkPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
