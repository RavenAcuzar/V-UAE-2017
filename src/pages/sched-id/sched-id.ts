import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageID } from '../dubai101-id/dubai101-id';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-id.html'
})
export class SchedPageID {
  Dubai101PageID = Dubai101PageID;
  TheSpeakersPageID = TheSpeakersPageID;
  constructor(public navCtrl: NavController) {

  }

}
