import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-ru.html'
})
export class SchedPageRU {
  Dubai101PageRU = Dubai101PageRU;
  TheSpeakersPageRU = TheSpeakersPageRU;
  constructor(public navCtrl: NavController) {

  }

}
