import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController, Toast } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { allAboutPage } from '../allabout/allabout';
import { NewsPage } from '../news/news';
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding.html'
})
export class NewslandingPage {
  private isLeaving: Boolean=false;
  private toastReload: Toast;
  connectSubscription: any;
  @ViewChild(Content) content: Content;

  myNews = [];
  
  allAboutPage = allAboutPage;
  TheSpeakersPage = TheSpeakersPage;
  NewsPage = NewsPage;

  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController,
  public toastCtrl:ToastController,public network: Network,protected connectionSvc:ConnectionService) {
    this.checkNetworkConnection();
    this.getNews();
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
    this.isLeaving=true;
    if (this.toastReload)
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
    body.set('count', '10');
    body.set('page', '1');
    body.set('language', window.localStorage['mylanguage']);

    let options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });

    this.http.post('http://cums.the-v.net/site.aspx', body, options)
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

  navigateToNews(id: String) {
    this.navCtrl.push(NewsPage, {
      id: id
    });
  }
  
  scrollToTop() {
    this.content.scrollToTop();
  }
}
