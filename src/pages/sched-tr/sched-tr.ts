import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-tr.html'
})
export class SchedPageTR {
  Dubai101PageTR = Dubai101PageTR;
  TheSpeakersPageTR = TheSpeakersPageTR;
  constructor(public navCtrl: NavController) {

  }

}
