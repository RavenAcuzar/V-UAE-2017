import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { SchedPage } from "../sched/sched";
import { Http } from "@angular/http";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-fr.html'
})
export class SchedPageFR extends SchedPage {
  @ViewChild(Content) content: Content;
  
  Dubai101PageFR = Dubai101PageFR;
  TheSpeakersPageFR = TheSpeakersPageFR;

  constructor(
    protected http: Http,
    protected storage: Storage
  ) {
    super(http, storage);
  }
}
