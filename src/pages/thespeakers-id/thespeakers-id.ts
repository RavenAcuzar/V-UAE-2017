import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { VFPPageID } from '../vfp-joseph-bismark-id/vfp-joseph-bismark-id';
import { VMPPageID } from '../vmp-dato-sri-vijay-eswaran-id/vmp-dato-sri-vijay-eswaran-id';
import { VPahPageID } from '../vp-adly-hassan-id/vp-adly-hassan-id';
import { VPagPageID } from '../vp-arun-george-id/vp-arun-george-id';
import { VPcmPageID } from '../vp-cherian-mathew-id/vp-cherian-mathew-id';
import { VPdsPageID } from '../vp-david-sharma-id/vp-david-sharma-id';
import { VPdjPageID } from '../vp-dev-johl-id/vp-dev-johl-id';
import { VPdwPageID } from '../vp-dev-wadhwani-id/vp-dev-wadhwani-id';
import { VPdiPageID } from '../vp-donna-imson-id/vp-donna-imson-id';
import { VPmqPageID } from '../vp-dr-motaz-qais-id/vp-dr-motaz-qais-id';
import { VPftPageID } from '../vp-ferdie-tolentino-id/vp-ferdie-tolentino-id';
import { VPhnPageID } from '../vp-hendra-nilam-id/vp-hendra-nilam-id';
import { VPkpPageID } from '../vp-kpadma-id/vp-kpadma-id';
import { VPksPageID } from '../vp-kuna-senathirajah-id/vp-kuna-senathirajah-id';
import { VPmkPageID } from '../vp-mahendra-kumar-id/vp-mahendra-kumar-id';
import { VPpsPageID } from '../vp-pathman-senathirajah-id/vp-pathman-senathirajah-id';
import { VPrsPageID } from '../vp-ranjit-singh-id/vp-ranjit-singh-id';
import { VPssPageID } from '../vp-sathi-senathirajah-id/vp-sathi-senathirajah-id';
import { VPtgPageID } from '../vp-tg-kintanar-id/vp-tg-kintanar-id';
import { NewslandingPageID } from '../newslanding-id/newslanding-id';
import { SchedPageID } from '../sched-id/sched-id';

@Component({
  selector: 'page-thespeakers',
  templateUrl: 'thespeakers-id.html'
})
export class TheSpeakersPageID {
  NewslandingPageID = NewslandingPageID;
  SchedPageID = SchedPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  VFPPageID = VFPPageID;
  VMPPageID = VMPPageID;
  VPahPageID = VPahPageID;
  VPagPageID = VPagPageID;
  VPcmPageID = VPcmPageID;
  VPdsPageID = VPdsPageID;
  VPdjPageID = VPdjPageID;
  VPdwPageID = VPdwPageID;
  VPdiPageID = VPdiPageID;
  VPmqPageID = VPmqPageID;
  VPftPageID = VPftPageID;
  VPhnPageID = VPhnPageID;
  VPkpPageID = VPkpPageID;
  VPksPageID = VPksPageID;
  VPmkPageID = VPmkPageID;
  VPpsPageID = VPpsPageID;
  VPrsPageID = VPrsPageID;
  VPssPageID = VPssPageID;
  VPtgPageID = VPtgPageID;
  constructor() { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TheSpeakersPage');
  }


}
