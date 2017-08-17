import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { Http, URLSearchParams } from "@angular/http";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-sched',
  templateUrl: 'sched.html'
})
export class SchedPage {
  @ViewChild(Content) content: Content;

  Dubai101Page = Dubai101Page;
  TheSpeakersPage = TheSpeakersPage;

  config: any = {};
  private events: any[] = [];
  private scheduleToday: any = {};
  private scheduleData: any[] = [];

  private dayIndex = 0;
  private todayDate = new Date();
  private startDate = new Date("2017-09-08");
  private isScheduleShown = false;
  private isEventNotYetStarted = false;
  private isEventAlreadyFinished = false;

  constructor(
    protected http: Http,
    protected storage: Storage
  ) { }

  scrollToTop() {
    this.content.scrollToTop();
  }

  ionViewDidLoad() {
    this.reloadData();
  }

  reloadData() {
    return this.retrieveConfig().then(() => {
      this.refreshScheduleData();
    });
  }

  reloadDataViaRefresher(e) {
    this.reloadData().then(() => {
      e.complete();
    })
  }

  retrieveConfig() {
    return new Promise((resolve, reject) => {
      this.config = {
        isTimeShown: false,
        overrideDateToday: false,
        dateToday: new Date()
      };
      if (this.config.overrideDateToday) {
        this.todayDate = this.config.dateToday;
      }
      resolve();
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
    let body = new URLSearchParams();
    body.set('language', window.localStorage['mylanguage']);

    console.log("Trying to retrieve schedule data from server...");
    this.http.get('https://cums.the-v.net/program.aspx', { params: body })
      .subscribe(res => {
        this.scheduleData = res.json();
        this.storage.set('schedule', this.scheduleData);
        this.onSuccessRetrieval();
      }, e => {
        console.error("Cannot retrieve schedule data from server.");
        console.error(JSON.stringify(e));
      });
  }

  onSuccessRetrieval() {
    let diffIndex = 1;
    let todayDateMonth = this.todayDate.getMonth();
    let startDateMonth = this.startDate.getMonth();

    if (todayDateMonth < startDateMonth) {
      // it's not yet the month of the event
      // leave diffIndex to be equal to 1
      this.isEventNotYetStarted = true;
      this.isEventAlreadyFinished = false;
    } else if (todayDateMonth === startDateMonth) {
      let numOfDaysOfEvent = this.scheduleData.length;
      let todayDateMonthDay = this.todayDate.getDate();
      let startDateMonthDay = this.startDate.getDate();

      if (todayDateMonthDay < startDateMonthDay) {
        // the event has not started yet
        // leave diffIndex to be equal to 1
        this.isEventNotYetStarted = true;
        this.isEventAlreadyFinished = false;
      } else if (todayDateMonthDay > startDateMonthDay + (numOfDaysOfEvent - 1)) {
        // the event is already finished. ignore diffIndex value.
        this.isEventNotYetStarted = false;
        this.isEventAlreadyFinished = true;
      } else {
        diffIndex = (todayDateMonthDay - startDateMonthDay) + 1;
        this.isEventNotYetStarted = false;
        this.isEventAlreadyFinished = false;
      }
    } else {
      // it's past the month of the event. ignore diffIndex value.
      this.isEventNotYetStarted = true;
      this.isEventAlreadyFinished = true;
    }

    this.isScheduleShown = !this.isEventNotYetStarted && !this.isEventAlreadyFinished;
    this.dayIndex = 0;
    for (var i = 0; i < this.scheduleData.length; i++) {
      let day = this.scheduleData[i];
      if (parseInt(day.num) === diffIndex) {
        this.dayIndex = i;
        break;
      }
    }
    this.scheduleToday = this.scheduleData[this.dayIndex];
    this.events = String(this.scheduleToday.program).split('-').map(e => e.trim());
  }
}
