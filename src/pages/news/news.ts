import { Component, ViewChild, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewslandingPage } from '../newslanding/newslanding';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage implements OnInit {
  @ViewChild(Content) content: Content;

  NewslandingPage = NewslandingPage;
  TheSpeakersPage = TheSpeakersPage;

  // The news object that will be retrieved from the server
  id: string = null;
  news  = {};

  constructor(protected navCtrl: NavController, protected navParams: NavParams, protected loadingController: LoadingController,
    protected http: Http) {
      this.getNewsView();
      }

  getNewsView(){
    this.id=null;
    this.news={};
    this.id = this.navParams.get('id');

    let loadingPopup = this.loadingController.create({
      content: 'Verifying...'
    });
    loadingPopup.present();

    let body = new URLSearchParams();
    body.set('action', 'getNews');
    body.set('URL', encodeURIComponent(this.id));
    body.set('language', window.localStorage['mylanguage']);

    let options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      })
    });

    this.http.post('http://cums.the-v.net/site.aspx', body)
      .subscribe(response => {
        this.news = response.json()[0];
      }, null, () => {
        loadingPopup.dismiss();
      });

  }

  ngOnInit(): void {

  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
