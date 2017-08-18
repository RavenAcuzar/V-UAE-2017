import { Component, ViewChild, Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { IonicPage, Slides, Content, NavController, NavParams, LoadingController, ToastController, Toast } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';
import { Http } from '@angular/http';
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise.html',
})
@Injectable()
export class MerchandisePage {
  private isLeaving: Boolean=false;
  private toastReload: Toast;
  connectSubscription: any;

  Dubai101Page = Dubai101Page;
  MarkPage = MarkPage;
  
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  myMerchandise = [];

  constructor(protected http: Http, protected loadingController: LoadingController,
  protected toastCtrl: ToastController,protected network: Network, protected connectionSvc: ConnectionService) {
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
              message: 'Something went wrong! Reload and Try again.',
              position: 'bottom',
              showCloseButton: true,
              closeButtonText: 'Reload'
            });
            toast.onDidDismiss(()=>{
              if(!this.isLeaving)
              this.getMerch();
            })
              toast.present();
              this.toastReload=toast;
            loadingPopup.dismiss();
      }, () => {
        loadingPopup.dismiss();
      });
    }

    ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
    this.isLeaving=true;
    if (this.toastReload)
      this.toastReload.dismiss();
  }

  checkNetworkConnection(){
        this.connectSubscription = this.connectionSvc.subscribeOnConnect(() => {
        this.getMerch();
      });          
    } 

  scrollToTop() {
    this.content.scrollToTop();
  }
}
