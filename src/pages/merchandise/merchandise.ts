import { Component, ViewChild, Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { IonicPage, Slides, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';
import { Http } from '@angular/http';
import { Network } from "@ionic-native/network";

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise.html',
})
@Injectable()
export class MerchandisePage {
  connectSubscription: any;
  disconnectSubscription: any;
  Dubai101Page = Dubai101Page;
  MarkPage = MarkPage;
  
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  myMerchandise = [];

  constructor(protected http: Http, protected loadingController: LoadingController,
  protected toastCtrl: ToastController,protected network: Network) {
    this.checkNetworkConnection();
    this.getMerch();
  }
    
    getMerch(){
      let loadingPopup = this.loadingController.create({
        content: 'Verifying...'
      });
      loadingPopup.present();

      let url = 'http://cums.the-v.net/file.aspx';
      this.http.request(url)
      .timeout(20000)
      .subscribe((result: any) => {
        this.myMerchandise = JSON.parse(result._body);
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
            this.getMerch();         
      });        
    } 

  scrollToTop() {
    this.content.scrollToTop();
  }
}
