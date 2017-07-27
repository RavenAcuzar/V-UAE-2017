import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VFPPageID } from '../vfp-joseph-bismark-id/vfp-joseph-bismark-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vmp-dato-sri-vijay-eswaran-ID.html'
})
export class VMPPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VFPPageID = VFPPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
