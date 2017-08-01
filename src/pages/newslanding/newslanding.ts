import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { allAboutPage } from '../allabout/allabout';
import { NewsPage } from '../news/news';

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding.html'
})
export class NewslandingPage implements OnInit{
 @ViewChild(Content) content: Content;
myNews = [];
allAboutPage = allAboutPage;
TheSpeakersPage = TheSpeakersPage;
NewsPage = NewsPage;
  constructor(public navCtrl: NavController, private http: Http, private loadingController: LoadingController) {
    this.getNews();
  }
  getNews(){
    this.myNews=[];
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
      }, null, () => {
        loadingPopup.dismiss();
      });
  }
  

  ngOnInit(): void{

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
