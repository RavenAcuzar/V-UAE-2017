import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { SchedPage } from "../sched/sched";
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-ar.html'
})
export class SchedPageAR extends SchedPage {
  @ViewChild(Content) content: Content;

  Dubai101PageAR = Dubai101PageAR;
  TheSpeakersPageAR = TheSpeakersPageAR;

  constructor(
    protected http: Http,
    protected storage: Storage
  ) { 
    super(http, storage);
  }
}
