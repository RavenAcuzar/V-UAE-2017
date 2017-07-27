import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VFPPageAR } from '../vfp-joseph-bismark-ar/vfp-joseph-bismark-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vmp-dato-sri-vijay-eswaran-ar.html'
})
export class VMPPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VFPPageAR = VFPPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
