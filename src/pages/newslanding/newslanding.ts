import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { allAboutPage } from '../allabout/allabout';
import { NewsPage } from '../news/news';
import { Network } from "@ionic-native/network";

 
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding.html'
})
export class NewslandingPage {
  connectSubscription: any;
  disconnectSubscription: any;
  @ViewChild(Content) content: Content;

  myNews = [];
  
  allAboutPage = allAboutPage;
  TheSpeakersPage = TheSpeakersPage;
  NewsPage = NewsPage;

  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController,
  public toastCtrl:ToastController,public network: Network) {
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
              message: 'No Internet connection! Please connect your device to the internet.',
              position: 'bottom'
            });
            toast.present();
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
