import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { VFPPageFR } from '../vfp-joseph-bismark-fr/vfp-joseph-bismark-fr';
import { VMPPageFR } from '../vmp-dato-sri-vijay-eswaran-fr/vmp-dato-sri-vijay-eswaran-fr';
import { VPahPageFR } from '../vp-adly-hassan-fr/vp-adly-hassan-fr';
import { VPagPageFR } from '../vp-arun-george-fr/vp-arun-george-fr';
import { VPcmPageFR } from '../vp-cherian-mathew-fr/vp-cherian-mathew-fr';
import { VPdsPageFR } from '../vp-david-sharma-fr/vp-david-sharma-fr';
import { VPdjPageFR } from '../vp-dev-johl-fr/vp-dev-johl-fr';
import { VPdwPageFR } from '../vp-dev-wadhwani-fr/vp-dev-wadhwani-fr';
import { VPdiPageFR } from '../vp-donna-imson-fr/vp-donna-imson-fr';
import { VPmqPageFR } from '../vp-dr-motaz-qais-fr/vp-dr-motaz-qais-fr';
import { VPftPageFR } from '../vp-ferdie-tolentino-fr/vp-ferdie-tolentino-fr';
import { VPhnPageFR } from '../vp-hendra-nilam-fr/vp-hendra-nilam-fr';
import { VPkpPageFR } from '../vp-kpadma-fr/vp-kpadma-fr';
import { VPksPageFR } from '../vp-kuna-senathirajah-fr/vp-kuna-senathirajah-fr';
import { VPmkPageFR } from '../vp-mahendra-kumar-fr/vp-mahendra-kumar-fr';
import { VPpsPageFR } from '../vp-pathman-senathirajah-fr/vp-pathman-senathirajah-fr';
import { VPrsPageFR } from '../vp-ranjit-singh-fr/vp-ranjit-singh-fr';
import { VPssPageFR } from '../vp-sathi-senathirajah-fr/vp-sathi-senathirajah-fr';
import { VPtgPageFR } from '../vp-tg-kintanar-fr/vp-tg-kintanar-fr';
import { NewslandingPageFR } from '../newslanding-fr/newslanding-fr';
import { SchedPageFR } from '../sched-fr/sched-fr';

@Component({
  selector: 'page-thespeakers',
  templateUrl: 'thespeakers-fr.html'
})
export class TheSpeakersPageFR {
  NewslandingPageFR = NewslandingPageFR;
  SchedPageFR = SchedPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  VFPPageFR = VFPPageFR;
  VMPPageFR = VMPPageFR;
  VPahPageFR = VPahPageFR;
  VPagPageFR = VPagPageFR;
  VPcmPageFR = VPcmPageFR;
  VPdsPageFR = VPdsPageFR;
  VPdjPageFR = VPdjPageFR;
  VPdwPageFR = VPdwPageFR;
  VPdiPageFR = VPdiPageFR;
  VPmqPageFR = VPmqPageFR;
  VPftPageFR = VPftPageFR;
  VPhnPageFR = VPhnPageFR;
  VPkpPageFR = VPkpPageFR;
  VPksPageFR = VPksPageFR;
  VPmkPageFR = VPmkPageFR;
  VPpsPageFR = VPpsPageFR;
  VPrsPageFR = VPrsPageFR;
  VPssPageFR = VPssPageFR;
  VPtgPageFR = VPtgPageFR;
  constructor() { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TheSpeakersPage');
  }


}
