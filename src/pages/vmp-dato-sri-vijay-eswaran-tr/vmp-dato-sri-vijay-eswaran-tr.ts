import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VFPPageTR } from '../vfp-joseph-bismark-tr/vfp-joseph-bismark-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vmp-dato-sri-vijay-eswaran-tr.html'
})
export class VMPPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VFPPageTR = VFPPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
