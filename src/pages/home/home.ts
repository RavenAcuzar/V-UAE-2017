import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { IonicPage, Content, NavController, NavParams, LoadingController, Events, ToastController } from 'ionic-angular';
import { allAboutPage } from '../allabout/allabout';
import { MarkPage } from '../mark/mark';
import { Dubai101Page } from '../dubai101/dubai101';
import { DownloadsPage } from '../downloads/downloads';
import { NewsPage } from '../news/news';
import { Observable } from 'rxjs/Rx';
import { Network } from "@ionic-native/network";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  connectSubscription: any;
  disconnectSubscription: any;
  @ViewChild(Content) content: Content;

  myNews = [];

  allAboutPage = allAboutPage;
  MarkPage = MarkPage;
  NewsPage = NewsPage;
  Dubai101Page = Dubai101Page;
  DownloadsPage = DownloadsPage;

  private _VDate;
  private _diff: number;
  public _days: number;
  public _hours: number;
  public _minutes: number;
  public _seconds: number;

  constructor(protected navCtrl: NavController, protected http: Http, protected loadingController: LoadingController,
  protected toastCtrl: ToastController,protected network: Network) {
  }

  ionViewDidEnter() {
    this._VDate = "2017-09-08";
    this.countDown();
    this.checkNetworkConnection();
    this.getNews();
  }

  ionViewDidLeave(){
    this.disconnectSubscription.unsubscribe();
    this.connectSubscription.unsubscribe();
  }
  
  checkNetworkConnection(){
       this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        
        let toast = this.toastCtrl.create({
              message: 'No Internet connection! Please connect your device to the internet.',
              position: 'bottom'
            });
            toast.present();
      });
      
      this.connectSubscription = this.network.onConnect().subscribe(() => {
      
        let toast = this.toastCtrl.create({
              message: 'Device is connected!',
              position: 'bottom',
              duration: 3000
            });
            toast.onDidDismiss(()=>{
              toast.dismissAll();
            });
            toast.present();
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
              message: 'No Internet connection! Please connect your device to the internet.',
              position: 'bottom'
            });
            toast.present();
          loadingPopup.dismiss();
      }, () => {
        loadingPopup.dismiss();
      });
  }
    
  ngOnInit() {
    this._VDate = "2017-09-08";
    this.countDown();
  }

  countDown() {
    Observable.interval(1000).map((x) => {
      this._diff = Date.parse(this._VDate) - Date.parse(new Date().toString());
    }).subscribe((x) => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });
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
