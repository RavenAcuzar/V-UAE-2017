import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { IonicPage, Content, NavController, NavParams, LoadingController, Events, ToastController, Toast } from 'ionic-angular';
import { allAboutPage } from '../allabout/allabout';
import { MarkPage } from '../mark/mark';
import { Dubai101Page } from '../dubai101/dubai101';
import { DownloadsPage } from '../downloads/downloads';
import { NewsPage } from '../news/news';
import { Observable } from 'rxjs/Rx';
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private isLeaving: boolean= false;
  connectSubscription: any;
  @ViewChild(Content) content: Content;

  myNews = [];


  allAboutPage = allAboutPage;
  MarkPage = MarkPage;
  NewsPage = NewsPage;
  Dubai101Page = Dubai101Page;
  DownloadsPage = DownloadsPage;

  private _VDate;
  private _dateNow;
  private _diff: number;
  public _days: number;
  public _hours: number;
  public _minutes: number;
  public _seconds: number;
  private toastReload: Toast;
  private subscription: Subscription;

  constructor(protected navCtrl: NavController, protected http: Http, protected loadingController: LoadingController,
  protected toastCtrl: ToastController,protected network: Network, protected connectionSvc: ConnectionService) {
  }

  ionViewDidEnter() {
    //this._VDate = "2017-09-08";
    if(this._dateNow>=this._VDate)
      {
        this.subscription.unsubscribe();
      }
      else
        this.countDown();
    this.checkNetworkConnection();
    this.getNews();
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
    this.isLeaving=true;
    this.toastReload.dismiss();
  }
  
  checkNetworkConnection(){
      this.connectSubscription = this.connectionSvc.subscribeOnConnect(() => {
        this.getNews();
      });          
  }

  getNews() {
    this.myNews = [];
    let loadingPopup = this.loadingController.create({
      content: 'Verifying...'
    });
    loadingPopup.present();

    let body = new URLSearchParams();
    body.set('action', 'getOldsNews');
    body.set('count', '4');
    body.set('page', '1');
    body.set('language', window.localStorage['mylanguage']);

    let options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
    this.http.post('http://cums.the-v.net/site.aspx', body, options)
      .timeout(20000)
      .subscribe(response => {
        this.myNews = response.json();
      }, e=>{
          let toast = this.toastCtrl.create({
              message: 'Something went wrong! Reload and Try again.',
              position: 'bottom',
              showCloseButton: true,
              closeButtonText: 'Reload'
            });
            toast.onDidDismiss(()=>{
              if(!this.isLeaving)
                this.getNews();
            })
            toast.present();
            this.toastReload=toast;
          loadingPopup.dismiss();
      }, () => {
        loadingPopup.dismiss();
      });
  }
    
  ngOnInit() {
    this._VDate = new Date("2017-09-08 00:00:00");
    this._dateNow= new Date();
    this.countDown();
    
  }

  countDown() {
    this.subscription = Observable.interval(1000)
    .map((x) => {
      this._diff = Date.parse(this._VDate) - Date.parse(new Date().toString());
      this._diff = this.checkDiff(this._diff)})
    .subscribe((x) => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });
  }
  checkDiff(diff){
    if(diff < 1000)
      {
        return 0;
      }
      else return diff;
  }
  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t) {
    return Math.floor((t / 1000) % 60);
  }

  navigateToNews(id: String) {
    this.navCtrl.push(NewsPage, {
      id: id
    });
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
