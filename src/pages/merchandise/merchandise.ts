import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise.html'
})
export class MerchandisePage {
Dubai101Page = Dubai101Page;
MarkPage = MarkPage;
<<<<<<< Updated upstream
constructor() {}
=======
myMerchandise =[];
constructor(private _jsonp: Jsonp, private loadingController: LoadingController) {
  
  

}
ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
  this.methodname();
  alert(this.myMerchandise.toString());
  
}


methodname()
{
  this.myMerchandise=[];

  let loadingPopup = this.loadingController.create({
      content: 'Verifying...'
    });
    loadingPopup.present();
  
  var url='https://the-v.net/Resources/VCONApp_Merchandise.json?callback=JSON_CALLBACK'+'&dummy='+Date.now();

  this._jsonp.request(url)
  .subscribe((result)=>{
    this.myMerchandise=result.json()[0];
    alert(this.myMerchandise.toString());
    //console.log ('ionViewDidLoad '+this.myMerchandise);
  },null, ()=>{
    loadingPopup.dismiss();
  });
}
>>>>>>> Stashed changes

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

@ViewChild(Slides) slides: Slides;

autoplay() {}


}
