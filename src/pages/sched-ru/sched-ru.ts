import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { Http } from "@angular/http";
import { Storage } from '@ionic/storage';
import { SchedPage } from "../sched/sched";
import { GeofenceService } from "../../app/services/geofence.service";

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-ru.html'
})
export class SchedPageRU extends SchedPage {
  @ViewChild(Content) content: Content;

  Dubai101PageRU = Dubai101PageRU;
  TheSpeakersPageRU = TheSpeakersPageRU;

  constructor(
    protected http: Http,
    protected storage: Storage,
    protected geofenceService: GeofenceService
  ) { 
    super(http, storage, geofenceService);
  }
}
