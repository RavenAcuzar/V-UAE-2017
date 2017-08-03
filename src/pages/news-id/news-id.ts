import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewsPage } from "../news/news";
import { Http } from "@angular/http";


@Component({
  selector: 'page-news',
  templateUrl: 'news-id.html'
})
export class NewsPageID  extends NewsPage {

   constructor(protected navCtrl: NavController, protected navParams: NavParams, protected loadingController: LoadingController,
    protected http: Http) {
      super(navCtrl, navParams,loadingController,http);
    }
    
   scrollToTop() {
    this.content.scrollToTop();
  }
}
  