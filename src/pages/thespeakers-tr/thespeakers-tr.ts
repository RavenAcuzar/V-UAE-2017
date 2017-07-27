import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { VFPPageTR } from '../vfp-joseph-bismark-tr/vfp-joseph-bismark-tr';
import { VMPPageTR } from '../vmp-dato-sri-vijay-eswaran-tr/vmp-dato-sri-vijay-eswaran-tr';
import { VPahPageTR } from '../vp-adly-hassan-tr/vp-adly-hassan-tr';
import { VPagPageTR } from '../vp-arun-george-tr/vp-arun-george-tr';
import { VPcmPageTR } from '../vp-cherian-mathew-tr/vp-cherian-mathew-tr';
import { VPdsPageTR } from '../vp-david-sharma-tr/vp-david-sharma-tr';
import { VPdjPageTR } from '../vp-dev-johl-tr/vp-dev-johl-tr';
import { VPdwPageTR } from '../vp-dev-wadhwani-tr/vp-dev-wadhwani-tr';
import { VPdiPageTR } from '../vp-donna-imson-tr/vp-donna-imson-tr';
import { VPmqPageTR } from '../vp-dr-motaz-qais-tr/vp-dr-motaz-qais-tr';
import { VPftPageTR } from '../vp-ferdie-tolentino-tr/vp-ferdie-tolentino-tr';
import { VPhnPageTR } from '../vp-hendra-nilam-tr/vp-hendra-nilam-tr';
import { VPkpPageTR } from '../vp-kpadma-tr/vp-kpadma-tr';
import { VPksPageTR } from '../vp-kuna-senathirajah-tr/vp-kuna-senathirajah-tr';
import { VPmkPageTR } from '../vp-mahendra-kumar-tr/vp-mahendra-kumar-tr';
import { VPpsPageTR } from '../vp-pathman-senathirajah-tr/vp-pathman-senathirajah-tr';
import { VPrsPageTR } from '../vp-ranjit-singh-tr/vp-ranjit-singh-tr';
import { VPssPageTR } from '../vp-sathi-senathirajah-tr/vp-sathi-senathirajah-tr';
import { VPtgPageTR } from '../vp-tg-kintanar-tr/vp-tg-kintanar-tr';
import { NewslandingPageTR } from '../newslanding-tr/newslanding-tr';
import { SchedPageTR } from '../sched-tr/sched-tr';

@Component({
  selector: 'page-thespeakers',
  templateUrl: 'thespeakers-tr.html'
})
export class TheSpeakersPageTR {
  NewslandingPageTR = NewslandingPageTR;
  SchedPageTR = SchedPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  VFPPageTR = VFPPageTR;
  VMPPageTR = VMPPageTR;
  VPahPageTR = VPahPageTR;
  VPagPageTR = VPagPageTR;
  VPcmPageTR = VPcmPageTR;
  VPdsPageTR = VPdsPageTR;
  VPdjPageTR = VPdjPageTR;
  VPdwPageTR = VPdwPageTR;
  VPdiPageTR = VPdiPageTR;
  VPmqPageTR = VPmqPageTR;
  VPftPageTR = VPftPageTR;
  VPhnPageTR = VPhnPageTR;
  VPkpPageTR = VPkpPageTR;
  VPksPageTR = VPksPageTR;
  VPmkPageTR = VPmkPageTR;
  VPpsPageTR = VPpsPageTR;
  VPrsPageTR = VPrsPageTR;
  VPssPageTR = VPssPageTR;
  VPtgPageTR = VPtgPageTR;
  constructor() { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TheSpeakersPage');
  }


}
