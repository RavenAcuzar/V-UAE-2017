import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VFPPage } from '../vfp-joseph-bismark/vfp-joseph-bismark';

@Component({
  selector: 'page-vp',
  templateUrl: 'vmp-dato-sri-vijay-eswaran.html'
})
export class VMPPage {
  TheSpeakersPage = TheSpeakersPage;
  VFPPage = VFPPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
