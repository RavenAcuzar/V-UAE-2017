import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-ar.html'
})
export class SchedPageAR {
  Dubai101PageAR = Dubai101PageAR;
  TheSpeakersPageAR = TheSpeakersPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

    constructor() {}
}
