import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { VFPPageAR } from '../vfp-joseph-bismark-ar/vfp-joseph-bismark-ar';
import { VMPPageAR } from '../vmp-dato-sri-vijay-eswaran-ar/vmp-dato-sri-vijay-eswaran-ar';
import { VPahPageAR } from '../vp-adly-hassan-ar/vp-adly-hassan-ar';
import { VPagPageAR } from '../vp-arun-george-ar/vp-arun-george-ar';
import { VPcmPageAR } from '../vp-cherian-mathew-ar/vp-cherian-mathew-ar';
import { VPdsPageAR } from '../vp-david-sharma-ar/vp-david-sharma-ar';
import { VPdjPageAR } from '../vp-dev-johl-ar/vp-dev-johl-ar';
import { VPdwPageAR } from '../vp-dev-wadhwani-ar/vp-dev-wadhwani-ar';
import { VPdiPageAR } from '../vp-donna-imson-ar/vp-donna-imson-ar';
import { VPmqPageAR } from '../vp-dr-motaz-qais-ar/vp-dr-motaz-qais-ar';
import { VPftPageAR } from '../vp-ferdie-tolentino-ar/vp-ferdie-tolentino-ar';
import { VPhnPageAR } from '../vp-hendra-nilam-ar/vp-hendra-nilam-ar';
import { VPkpPageAR } from '../vp-kpadma-ar/vp-kpadma-ar';
import { VPksPageAR } from '../vp-kuna-senathirajah-ar/vp-kuna-senathirajah-ar';
import { VPmkPageAR } from '../vp-mahendra-kumar-ar/vp-mahendra-kumar-ar';
import { VPpsPageAR } from '../vp-pathman-senathirajah-ar/vp-pathman-senathirajah-ar';
import { VPrsPageAR } from '../vp-ranjit-singh-ar/vp-ranjit-singh-ar';
import { VPssPageAR } from '../vp-sathi-senathirajah-ar/vp-sathi-senathirajah-ar';
import { VPtgPageAR } from '../vp-tg-kintanar-ar/vp-tg-kintanar-ar';
import { NewslandingPageAR } from '../newslanding-ar/newslanding-ar';
import { SchedPageAR } from '../sched-ar/sched-ar';

@Component({
  selector: 'page-thespeakers',
  templateUrl: 'thespeakers-ar.html'
})
export class TheSpeakersPageAR {
  NewslandingPageAR = NewslandingPageAR;
  SchedPageAR = SchedPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  VFPPageAR = VFPPageAR;
  VMPPageAR = VMPPageAR;
  VPahPageAR = VPahPageAR;
  VPagPageAR = VPagPageAR;
  VPcmPageAR = VPcmPageAR;
  VPdsPageAR = VPdsPageAR;
  VPdjPageAR = VPdjPageAR;
  VPdwPageAR = VPdwPageAR;
  VPdiPageAR = VPdiPageAR;
  VPmqPageAR = VPmqPageAR;
  VPftPageAR = VPftPageAR;
  VPhnPageAR = VPhnPageAR;
  VPkpPageAR = VPkpPageAR;
  VPksPageAR = VPksPageAR;
  VPmkPageAR = VPmkPageAR;
  VPpsPageAR = VPpsPageAR;
  VPrsPageAR = VPrsPageAR;
  VPssPageAR = VPssPageAR;
  VPtgPageAR = VPtgPageAR;
  constructor() { }
  


}
