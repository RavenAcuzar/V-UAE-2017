import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { VFPPage } from '../vfp-joseph-bismark/vfp-joseph-bismark';
import { VMPPage } from '../vmp-dato-sri-vijay-eswaran/vmp-dato-sri-vijay-eswaran';
import { VPahPage } from '../vp-adly-hassan/vp-adly-hassan';
import { VPagPage } from '../vp-arun-george/vp-arun-george';
import { VPcmPage } from '../vp-cherian-mathew/vp-cherian-mathew';
import { VPdsPage } from '../vp-david-sharma/vp-david-sharma';
import { VPdjPage } from '../vp-dev-johl/vp-dev-johl';
import { VPdwPage } from '../vp-dev-wadhwani/vp-dev-wadhwani';
import { VPdiPage } from '../vp-donna-imson/vp-donna-imson';
import { VPmqPage } from '../vp-dr-motaz-qais/vp-dr-motaz-qais';
import { VPftPage } from '../vp-ferdie-tolentino/vp-ferdie-tolentino';
import { VPhnPage } from '../vp-hendra-nilam/vp-hendra-nilam';
import { VPkpPage } from '../vp-kpadma/vp-kpadma';
import { VPksPage } from '../vp-kuna-senathirajah/vp-kuna-senathirajah';
import { VPmkPage } from '../vp-mahendra-kumar/vp-mahendra-kumar';
import { VPpsPage } from '../vp-pathman-senathirajah/vp-pathman-senathirajah';
import { VPrsPage } from '../vp-ranjit-singh/vp-ranjit-singh';
import { VPssPage } from '../vp-sathi-senathirajah/vp-sathi-senathirajah';
import { VPtgPage } from '../vp-tg-kintanar/vp-tg-kintanar';
import { NewslandingPage } from '../newslanding/newslanding';
import { SchedPage } from '../sched/sched';

@Component({
  selector: 'page-thespeakers',
  templateUrl: 'thespeakers.html'
})
export class TheSpeakersPage {
  NewslandingPage = NewslandingPage;
  SchedPage = SchedPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  VFPPage = VFPPage;
  VMPPage = VMPPage;
  VPahPage = VPahPage;
  VPagPage = VPagPage;
  VPcmPage = VPcmPage;
  VPdsPage = VPdsPage;
  VPdjPage = VPdjPage;
  VPdwPage = VPdwPage;
  VPdiPage = VPdiPage;
  VPmqPage = VPmqPage;
  VPftPage = VPftPage;
  VPhnPage = VPhnPage;
  VPkpPage = VPkpPage;
  VPksPage = VPksPage;
  VPmkPage = VPmkPage;
  VPpsPage = VPpsPage;
  VPrsPage = VPrsPage;
  VPssPage = VPssPage;
  VPtgPage = VPtgPage;
  constructor() { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TheSpeakersPage');
  }


}
