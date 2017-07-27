import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-fr.html'
})
export class SchedPageFR {
  Dubai101PageFR = Dubai101PageFR;
  TheSpeakersPageFR = TheSpeakersPageFR;
  constructor(public navCtrl: NavController) {

  }

}
