import { Component, ViewChild, Injectable } from '@angular/core';
import { IonicPage, Slides, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';
import { Jsonp } from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise.html',
})
@Injectable()
export class MerchandisePage {
Dubai101Page = Dubai101Page;
MarkPage = MarkPage;
myMerchandise =null;
constructor(private _jsonp: Jsonp, private loadingController: LoadingController) {
  let loadingPopup = this.loadingController.create({
      content: 'Verifying...'
    });
    loadingPopup.present();
  
  
  var url='https://the-v.net/Resources/VCONApp_Merchandise.json?callback=JSON_CALLBACK'+'&dummy='+Date.now();

  this._jsonp.request(url)
  .subscribe((result)=>{
    this.myMerchandise=result;
    console.log ('ionViewDidLoad '+this.myMerchandise);
  },null, ()=>{
    loadingPopup.dismiss();
  });
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

@ViewChild(Slides) slides: Slides;

autoplay() {}


}
