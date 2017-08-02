import { Component, ViewChild, Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { IonicPage, Slides, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise.html',
})
@Injectable()
export class MerchandisePage {
  Dubai101Page = Dubai101Page;
  MarkPage = MarkPage;
  
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  myMerchandise = [];

  constructor(private http: Http, private loadingController: LoadingController) {
    let loadingPopup = this.loadingController.create({
      content: 'Verifying...'
    });
    loadingPopup.present();

    let url = 'http://cums.the-v.net/file.aspx';

    this.http.request(url).subscribe((result: any) => {
      this.myMerchandise = JSON.parse(result._body);
    }, null, () => {
      loadingPopup.dismiss();
    });
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
