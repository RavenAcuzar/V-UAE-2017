import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { VFPPageRU } from '../vfp-joseph-bismark-ru/vfp-joseph-bismark-ru';
import { VMPPageRU } from '../vmp-dato-sri-vijay-eswaran-ru/vmp-dato-sri-vijay-eswaran-ru';
import { VPahPageRU } from '../vp-adly-hassan-ru/vp-adly-hassan-ru';
import { VPagPageRU } from '../vp-arun-george-ru/vp-arun-george-ru';
import { VPcmPageRU } from '../vp-cherian-mathew-ru/vp-cherian-mathew-ru';
import { VPdsPageRU } from '../vp-david-sharma-ru/vp-david-sharma-ru';
import { VPdjPageRU } from '../vp-dev-johl-ru/vp-dev-johl-ru';
import { VPdwPageRU } from '../vp-dev-wadhwani-ru/vp-dev-wadhwani-ru';
import { VPdiPageRU } from '../vp-donna-imson-ru/vp-donna-imson-ru';
import { VPmqPageRU } from '../vp-dr-motaz-qais-ru/vp-dr-motaz-qais-ru';
import { VPftPageRU } from '../vp-ferdie-tolentino-ru/vp-ferdie-tolentino-ru';
import { VPhnPageRU } from '../vp-hendra-nilam-ru/vp-hendra-nilam-ru';
import { VPkpPageRU } from '../vp-kpadma-ru/vp-kpadma-ru';
import { VPksPageRU } from '../vp-kuna-senathirajah-ru/vp-kuna-senathirajah-ru';
import { VPmkPageRU } from '../vp-mahendra-kumar-ru/vp-mahendra-kumar-ru';
import { VPpsPageRU } from '../vp-pathman-senathirajah-ru/vp-pathman-senathirajah-ru';
import { VPrsPageRU } from '../vp-ranjit-singh-ru/vp-ranjit-singh-ru';
import { VPssPageRU } from '../vp-sathi-senathirajah-ru/vp-sathi-senathirajah-ru';
import { VPtgPageRU } from '../vp-tg-kintanar-ru/vp-tg-kintanar-ru';
import { NewslandingPageRU } from '../newslanding-ru/newslanding-ru';
import { SchedPageRU } from '../sched-ru/sched-ru';

@Component({
  selector: 'page-thespeakers',
  templateUrl: 'thespeakers-ru.html'
})
export class TheSpeakersPageRU {
  NewslandingPageRU = NewslandingPageRU;
  SchedPageRU = SchedPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  VFPPageRU = VFPPageRU;
  VMPPageRU = VMPPageRU;
  VPahPageRU = VPahPageRU;
  VPagPageRU = VPagPageRU;
  VPcmPageRU = VPcmPageRU;
  VPdsPageRU = VPdsPageRU;
  VPdjPageRU = VPdjPageRU;
  VPdwPageRU = VPdwPageRU;
  VPdiPageRU = VPdiPageRU;
  VPmqPageRU = VPmqPageRU;
  VPftPageRU = VPftPageRU;
  VPhnPageRU = VPhnPageRU;
  VPkpPageRU = VPkpPageRU;
  VPksPageRU = VPksPageRU;
  VPmkPageRU = VPmkPageRU;
  VPpsPageRU = VPpsPageRU;
  VPrsPageRU = VPrsPageRU;
  VPssPageRU = VPssPageRU;
  VPtgPageRU = VPtgPageRU;
  constructor() { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TheSpeakersPage');
  }


}
