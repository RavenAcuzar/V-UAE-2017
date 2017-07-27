import { Component, ViewChild, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewslandingPage } from '../newslanding/newslanding';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { Http, Headers, RequestOptions } from "@angular/http";


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage implements OnInit {
  @ViewChild(Content) content: Content;

  NewslandingPage = NewslandingPage;
  TheSpeakersPage = TheSpeakersPage;

  // The news object that will be retrieved from the server
  news = null;

  constructor(public navCtrl: NavController, private loadingController: LoadingController, 
              private http: Http, private location: Location) {
  }

  ngOnInit(): void {
    let loadingPopup = this.loadingController.create({
      content: 'Verifying...'
    });
    loadingPopup.present();

    let path = this.location.path();
    console.log(path);

    let id = '';
    let body = new URLSearchParams();
    body.set('action', 'getNews');
    body.set('URL', id);
    body.set('language', window.localStorage['mylanguage']);

    console.log('News ID' + id);

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });
    let options = new RequestOptions({
      headers: headers
    });

    this.http.post('http://cums.the-v.net/site.aspx', body)
      .subscribe(response => {
        this.news = response.json();
      }, null, () => {
        loadingPopup.dismiss();
      });
  }
  
  scrollToTop() {
    this.content.scrollToTop();
  }
}
