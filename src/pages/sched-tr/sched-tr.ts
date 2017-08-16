import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { SchedPage } from "../sched/sched";
import { Http } from "@angular/http";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-tr.html'
})
export class SchedPageTR extends SchedPage {
  @ViewChild(Content) content: Content;

  Dubai101PageTR = Dubai101PageTR;
  TheSpeakersPageTR = TheSpeakersPageTR;
  
  constructor(
    protected http: Http,
    protected storage: Storage
  ) {
    super(http, storage);
  }
}
