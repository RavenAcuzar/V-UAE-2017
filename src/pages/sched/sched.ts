import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { Http } from "@angular/http";
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched.html'
})
export class SchedPage {
  @ViewChild(Content) content: Content;

  Dubai101Page = Dubai101Page;
  TheSpeakersPage = TheSpeakersPage;

  config: any = {};
  events: any = [];
  private scheduleData: any[] = [];
  private scheduleToday: any = {};
  private dateTodayStr: string;

  constructor(
    protected http: Http,
    protected storage: Storage,
  ) { }

  scrollToTop() {
    this.content.scrollToTop();
  }

  ionViewDidLoad() {
    this.reloadData();
  }

  reloadData() {
    this.retrieveConfig().then(() => {
      this.retrieveScheduleData();
    });
  }

  retrieveConfig() {
    console.log("Retrieving config from server...");
    return new Promise((resolve, reject) => {
      this.http.get('http://192.168.130.199:3000/schedule/config').subscribe(res => {
        console.log("Retrieved config from server successfully!");
        this.config = res.json();
        this.config.dateToday = this.config.overrideDateToday ? new Date(this.config.dateToday) : new Date();
        resolve();
      }, e => {
        console.log("Failed to retrieve config from server. Using fallback config.");
        console.error(JSON.stringify(e));
        this.config = {
          isTimeShown: false,
          overrideDateToday: false,
          dateToday: new Date()
        };
        resolve();
      });
    });
  }

  retrieveScheduleData() {
    console.log("Trying to retrieve schedule data from local storage...");
    this.storage.get('schedule').then(data => {
      if (data) {
        console.log('Retrieved schedule data from local storage!');
        this.scheduleData = data;
        this.onSuccessRetrieval();
      } else {
        console.log('Failed to retrieve schedule data from local storage.');
        this.refreshScheduleData();
      }
    }).catch(e => {
      console.log('Failed to retrieve schedule data from local storage.');
      this.refreshScheduleData();
    });
  }

  refreshScheduleData() {
    console.log("Trying to retrieve schedule data from server...");
    this.http.get('http://192.168.130.199:3000/schedule').subscribe(res => {
      this.scheduleData = res.json();
      this.storage.set('schedule', this.scheduleData);
      this.onSuccessRetrieval();
    }, e => {
      console.error("Cannot retrieve schedule data from server.");
      console.error(JSON.stringify(e));
    });
  }

  onSuccessRetrieval() {
    let daySchedule = this.scheduleData.filter(daySched => {
      let day = new Date(daySched.day);
      let today = this.config.dateToday;
      return day.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
    });

    if (daySchedule.length > 1) {
      throw new Error('There should be no multiple entries for a day.');
    } else if (daySchedule.length === 0) {
      // TODO: no schedule for today
      console.log('no schedule for today');
    } else {
      this.scheduleToday = daySchedule[0];
      this.scheduleToday.day = new Date(this.scheduleToday.day);
      this.scheduleToday.dayStr = this.formatDate(this.scheduleToday.day);
      this.events = this.scheduleToday.events;
    }
  }

  private formatDate(date: Date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return monthNames[monthIndex] + ' ' + day + ' ' + year;
  }
}
