import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomePageAR } from '../pages/home-ar/home-ar';
import { HomePageFR } from '../pages/home-fr/home-fr';
import { HomePageTR } from '../pages/home-tr/home-tr';
import { HomePageRU } from '../pages/home-ru/home-ru';

import { allAboutPage } from '../pages/allabout/allabout';
import { allAboutPageAR } from '../pages/allabout-ar/allabout-ar';
import { allAboutPageFR } from '../pages/allabout-fr/allabout-fr';
import { allAboutPageTR } from '../pages/allabout-tr/allabout-tr';
import { allAboutPageRU } from '../pages/allabout-ru/allabout-ru';

import { NewslandingPage } from '../pages/newslanding/newslanding';
import { NewslandingPageAR } from '../pages/newslanding-ar/newslanding-ar';
import { NewslandingPageFR } from '../pages/newslanding-fr/newslanding-fr';
import { NewslandingPageRU } from '../pages/newslanding-ru/newslanding-ru';
import { NewslandingPageTR } from '../pages/newslanding-tr/newslanding-tr';

import { NewsPage } from '../pages/news/news';
import { NewsPageAR } from '../pages/news-ar/news-ar';
import { NewsPageFR } from '../pages/news-fr/news-fr';
import { NewsPageRU } from '../pages/news-ru/news-ru';
import { NewsPageTR } from '../pages/news-tr/news-tr';

import { TheSpeakersPage } from '../pages/thespeakers/thespeakers';
import { TheSpeakersPageAR } from '../pages/thespeakers-ar/thespeakers-ar';
import { TheSpeakersPageFR } from '../pages/thespeakers-fr/thespeakers-fr';
import { TheSpeakersPageRU } from '../pages/thespeakers-ru/thespeakers-ru';
import { TheSpeakersPageTR } from '../pages/thespeakers-tr/thespeakers-tr';

import { SchedPage } from '../pages/sched/sched';
import { SchedPageAR } from '../pages/sched-ar/sched-ar';
import { SchedPageFR } from '../pages/sched-fr/sched-fr';
import { SchedPageRU } from '../pages/sched-ru/sched-ru';
import { SchedPageTR } from '../pages/sched-tr/sched-tr';

import { Dubai101Page } from '../pages/dubai101/dubai101';
import { Dubai101PageAR } from '../pages/dubai101-ar/dubai101-ar';
import { Dubai101PageFR } from '../pages/dubai101-fr/dubai101-fr';
import { Dubai101PageRU } from '../pages/dubai101-ru/dubai101-ru';
import { Dubai101PageTR } from '../pages/dubai101-tr/dubai101-tr';

import { MerchandisePage } from '../pages/merchandise/merchandise';
import { MerchandisePageAR } from '../pages/merchandise-ar/merchandise-ar';
import { MerchandisePageFR } from '../pages/merchandise-fr/merchandise-fr';
import { MerchandisePageRU } from '../pages/merchandise-ru/merchandise-ru';
import { MerchandisePageTR } from '../pages/merchandise-tr/merchandise-tr';

import { MarkPage } from '../pages/mark/mark';
import { MarkPageAR } from '../pages/mark-ar/mark-ar';
import { MarkPageFR } from '../pages/mark-fr/mark-fr';
import { MarkPageRU } from '../pages/mark-ru/mark-ru';
import { MarkPageTR } from '../pages/mark-tr/mark-tr';

import { DownloadsPage } from '../pages/downloads/downloads';
import { DownloadsPageAR } from '../pages/downloads-ar/downloads-ar';
import { DownloadsPageFR } from '../pages/downloads-fr/downloads-fr';
import { DownloadsPageRU } from '../pages/downloads-ru/downloads-ru';
import { DownloadsPageTR } from '../pages/downloads-tr/downloads-tr';

import { FaqsPage } from '../pages/faqs/faqs';
import { FaqsPageAR } from '../pages/faqs-ar/faqs-ar';
import { FaqsPageFR } from '../pages/faqs-fr/faqs-fr';
import { FaqsPageRU } from '../pages/faqs-ru/faqs-ru';
import { FaqsPageTR } from '../pages/faqs-tr/faqs-tr';

import { ContactPage } from '../pages/contact/contact';
import { ContactPageAR } from '../pages/contact-ar/contact-ar';
import { ContactPageFR } from '../pages/contact-fr/contact-fr';
import { ContactPageRU } from '../pages/contact-ru/contact-ru';
import { ContactPageTR } from '../pages/contact-tr/contact-tr';

import { VFPPage } from '../pages/vfp-joseph-bismark/vfp-joseph-bismark';
import { VFPPageAR } from '../pages/vfp-joseph-bismark-ar/vfp-joseph-bismark-ar';
import { VFPPageFR } from '../pages/vfp-joseph-bismark-fr/vfp-joseph-bismark-fr';
import { VFPPageRU } from '../pages/vfp-joseph-bismark-ru/vfp-joseph-bismark-ru';
import { VFPPageTR } from '../pages/vfp-joseph-bismark-tr/vfp-joseph-bismark-tr';

import { VMPPage } from '../pages/vmp-dato-sri-vijay-eswaran/vmp-dato-sri-vijay-eswaran';
import { VMPPageAR } from '../pages/vmp-dato-sri-vijay-eswaran-ar/vmp-dato-sri-vijay-eswaran-ar';
import { VMPPageFR } from '../pages/vmp-dato-sri-vijay-eswaran-fr/vmp-dato-sri-vijay-eswaran-fr';
import { VMPPageRU } from '../pages/vmp-dato-sri-vijay-eswaran-ru/vmp-dato-sri-vijay-eswaran-ru';
import { VMPPageTR } from '../pages/vmp-dato-sri-vijay-eswaran-tr/vmp-dato-sri-vijay-eswaran-tr';

import { VPahPage } from '../pages/vp-adly-hassan/vp-adly-hassan';
import { VPahPageAR } from '../pages/vp-adly-hassan-ar/vp-adly-hassan-ar';
import { VPahPageFR } from '../pages/vp-adly-hassan-fr/vp-adly-hassan-fr';
import { VPahPageRU } from '../pages/vp-adly-hassan-ru/vp-adly-hassan-ru';
import { VPahPageTR } from '../pages/vp-adly-hassan-tr/vp-adly-hassan-tr';

import { VPagPage } from '../pages/vp-arun-george/vp-arun-george';
import { VPagPageAR } from '../pages/vp-arun-george-ar/vp-arun-george-ar';
import { VPagPageFR } from '../pages/vp-arun-george-fr/vp-arun-george-fr';
import { VPagPageRU } from '../pages/vp-arun-george-ru/vp-arun-george-ru';
import { VPagPageTR } from '../pages/vp-arun-george-tr/vp-arun-george-tr';


import { VPcmPage } from '../pages/vp-cherian-mathew/vp-cherian-mathew';
import { VPcmPageAR } from '../pages/vp-cherian-mathew-ar/vp-cherian-mathew-ar';
import { VPcmPageFR } from '../pages/vp-cherian-mathew-fr/vp-cherian-mathew-fr';
import { VPcmPageRU } from '../pages/vp-cherian-mathew-ru/vp-cherian-mathew-ru';
import { VPcmPageTR } from '../pages/vp-cherian-mathew-tr/vp-cherian-mathew-tr';


import { VPdsPage } from '../pages/vp-david-sharma/vp-david-sharma';
import { VPdsPageAR } from '../pages/vp-david-sharma-ar/vp-david-sharma-ar';
import { VPdsPageFR } from '../pages/vp-david-sharma-fr/vp-david-sharma-fr';
import { VPdsPageRU } from '../pages/vp-david-sharma-ru/vp-david-sharma-ru';
import { VPdsPageTR } from '../pages/vp-david-sharma-tr/vp-david-sharma-tr';

import { VPdjPage } from '../pages/vp-dev-johl/vp-dev-johl';
import { VPdjPageAR } from '../pages/vp-dev-johl-ar/vp-dev-johl-ar';
import { VPdjPageFR } from '../pages/vp-dev-johl-fr/vp-dev-johl-fr';
import { VPdjPageRU } from '../pages/vp-dev-johl-ru/vp-dev-johl-ru';
import { VPdjPageTR } from '../pages/vp-dev-johl-tr/vp-dev-johl-tr';

import { VPdwPage } from '../pages/vp-dev-wadhwani/vp-dev-wadhwani';
import { VPdwPageAR } from '../pages/vp-dev-wadhwani-ar/vp-dev-wadhwani-ar';
import { VPdwPageFR } from '../pages/vp-dev-wadhwani-fr/vp-dev-wadhwani-fr';
import { VPdwPageRU } from '../pages/vp-dev-wadhwani-ru/vp-dev-wadhwani-ru';
import { VPdwPageTR } from '../pages/vp-dev-wadhwani-tr/vp-dev-wadhwani-tr';


import { VPdiPage } from '../pages/vp-donna-imson/vp-donna-imson';
import { VPdiPageAR } from '../pages/vp-donna-imson-ar/vp-donna-imson-ar';
import { VPdiPageFR } from '../pages/vp-donna-imson-fr/vp-donna-imson-fr';
import { VPdiPageRU } from '../pages/vp-donna-imson-ru/vp-donna-imson-ru';
import { VPdiPageTR } from '../pages/vp-donna-imson-tr/vp-donna-imson-tr';


import { VPmqPage } from '../pages/vp-dr-motaz-qais/vp-dr-motaz-qais';
import { VPmqPageAR } from '../pages/vp-dr-motaz-qais-ar/vp-dr-motaz-qais-ar';
import { VPmqPageFR } from '../pages/vp-dr-motaz-qais-fr/vp-dr-motaz-qais-fr';
import { VPmqPageRU } from '../pages/vp-dr-motaz-qais-ru/vp-dr-motaz-qais-ru';
import { VPmqPageTR } from '../pages/vp-dr-motaz-qais-tr/vp-dr-motaz-qais-tr';

import { VPftPage } from '../pages/vp-ferdie-tolentino/vp-ferdie-tolentino';
import { VPftPageAR } from '../pages/vp-ferdie-tolentino-ar/vp-ferdie-tolentino-ar';
import { VPftPageFR } from '../pages/vp-ferdie-tolentino-fr/vp-ferdie-tolentino-fr';
import { VPftPageRU } from '../pages/vp-ferdie-tolentino-ru/vp-ferdie-tolentino-ru';
import { VPftPageTR } from '../pages/vp-ferdie-tolentino-tr/vp-ferdie-tolentino-tr';

import { VPhnPage } from '../pages/vp-hendra-nilam/vp-hendra-nilam';
import { VPhnPageAR } from '../pages/vp-hendra-nilam-ar/vp-hendra-nilam-ar';
import { VPhnPageFR } from '../pages/vp-hendra-nilam-fr/vp-hendra-nilam-fr';
import { VPhnPageRU } from '../pages/vp-hendra-nilam-ru/vp-hendra-nilam-ru';
import { VPhnPageTR } from '../pages/vp-hendra-nilam-tr/vp-hendra-nilam-tr';

import { VPkpPage } from '../pages/vp-kpadma/vp-kpadma';
import { VPkpPageAR } from '../pages/vp-kpadma-ar/vp-kpadma-ar';
import { VPkpPageFR } from '../pages/vp-kpadma-fr/vp-kpadma-fr';
import { VPkpPageRU } from '../pages/vp-kpadma-ru/vp-kpadma-ru';
import { VPkpPageTR } from '../pages/vp-kpadma-tr/vp-kpadma-tr';

import { VPksPage } from '../pages/vp-kuna-senathirajah/vp-kuna-senathirajah';
import { VPksPageAR } from '../pages/vp-kuna-senathirajah-ar/vp-kuna-senathirajah-ar';
import { VPksPageFR } from '../pages/vp-kuna-senathirajah-fr/vp-kuna-senathirajah-fr';
import { VPksPageRU } from '../pages/vp-kuna-senathirajah-ru/vp-kuna-senathirajah-ru';
import { VPksPageTR } from '../pages/vp-kuna-senathirajah-tr/vp-kuna-senathirajah-tr';

import { VPmkPage } from '../pages/vp-mahendra-kumar/vp-mahendra-kumar';
import { VPmkPageAR } from '../pages/vp-mahendra-kumar-ar/vp-mahendra-kumar-ar';
import { VPmkPageFR } from '../pages/vp-mahendra-kumar-fr/vp-mahendra-kumar-fr';
import { VPmkPageRU } from '../pages/vp-mahendra-kumar-ru/vp-mahendra-kumar-ru';
import { VPmkPageTR } from '../pages/vp-mahendra-kumar-tr/vp-mahendra-kumar-tr';

import { VPpsPage } from '../pages/vp-pathman-senathirajah/vp-pathman-senathirajah';
import { VPpsPageAR } from '../pages/vp-pathman-senathirajah-ar/vp-pathman-senathirajah-ar';
import { VPpsPageFR } from '../pages/vp-pathman-senathirajah-fr/vp-pathman-senathirajah-fr';
import { VPpsPageRU } from '../pages/vp-pathman-senathirajah-ru/vp-pathman-senathirajah-ru';
import { VPpsPageTR } from '../pages/vp-pathman-senathirajah-tr/vp-pathman-senathirajah-tr';

import { VPrsPage } from '../pages/vp-ranjit-singh/vp-ranjit-singh';
import { VPrsPageAR } from '../pages/vp-ranjit-singh-ar/vp-ranjit-singh-ar';
import { VPrsPageFR } from '../pages/vp-ranjit-singh-fr/vp-ranjit-singh-fr';
import { VPrsPageRU } from '../pages/vp-ranjit-singh-ru/vp-ranjit-singh-ru';
import { VPrsPageTR } from '../pages/vp-ranjit-singh-tr/vp-ranjit-singh-tr';

import { VPssPage } from '../pages/vp-sathi-senathirajah/vp-sathi-senathirajah';
import { VPssPageAR } from '../pages/vp-sathi-senathirajah-ar/vp-sathi-senathirajah-ar';
import { VPssPageFR } from '../pages/vp-sathi-senathirajah-fr/vp-sathi-senathirajah-fr';
import { VPssPageRU } from '../pages/vp-sathi-senathirajah-ru/vp-sathi-senathirajah-ru';
import { VPssPageTR } from '../pages/vp-sathi-senathirajah-tr/vp-sathi-senathirajah-tr';

import { VPtgPage } from '../pages/vp-tg-kintanar/vp-tg-kintanar';
import { VPtgPageAR } from '../pages/vp-tg-kintanar-ar/vp-tg-kintanar-ar';
import { VPtgPageFR } from '../pages/vp-tg-kintanar-fr/vp-tg-kintanar-fr';
import { VPtgPageRU } from '../pages/vp-tg-kintanar-ru/vp-tg-kintanar-ru';
import { VPtgPageTR } from '../pages/vp-tg-kintanar-tr/vp-tg-kintanar-tr';


import { WhattoPage } from '../pages/whatto/whatto';
import { WhattoPageAR } from '../pages/whatto-ar/whatto-ar';
import { WhattoPageFR } from '../pages/whatto-fr/whatto-fr';
import { WhattoPageRU } from '../pages/whatto-ru/whatto-ru';
import { WhattoPageTR } from '../pages/whatto-tr/whatto-tr';

import { WheretoPage } from '../pages/whereto/whereto';
import { WheretoPageAR } from '../pages/whereto-ar/whereto-ar';
import { WheretoPageFR } from '../pages/whereto-fr/whereto-fr';
import { WheretoPageRU } from '../pages/whereto-ru/whereto-ru';
import { WheretoPageTR } from '../pages/whereto-tr/whereto-tr';

import { HowtoPage } from '../pages/howto/howto';
import { HowtoPageAR } from '../pages/howto-ar/howto-ar';
import { HowtoPageFR } from '../pages/howto-fr/howto-fr';
import { HowtoPageRU } from '../pages/howto-ru/howto-ru';
import { HowtoPageTR } from '../pages/howto-tr/howto-tr';


import { ChangeLangPage } from '../pages/changelang/changelang';
import { SplashPage } from '../pages/splash/splash';

import { SplashnextPage } from '../pages/splashnext/splashnext';
import { SplashnextPageAR } from '../pages/splashnext-ar/splashnext-ar';
import { SplashnextPageFR } from '../pages/splashnext-fr/splashnext-fr';
import { SplashnextPageRU } from '../pages/splashnext-ru/splashnext-ru';
import { SplashnextPageTR } from '../pages/splashnext-tr/splashnext-tr';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JsonpModule } from '@angular/http';
import { Deeplinks } from "@ionic-native/deeplinks";
import { Camera } from "@ionic-native/camera";
import { Crop } from "@ionic-native/crop";
import { PhotoLibrary } from "@ionic-native/photo-library";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Network } from "@ionic-native/network";
import { File } from "@ionic-native/file";
import { FileTransfer } from "@ionic-native/file-transfer";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    HomePage, HomePageAR, HomePageRU, HomePageFR, HomePageTR,

    NewslandingPage, NewslandingPageAR, NewslandingPageFR, NewslandingPageRU, NewslandingPageTR,

    NewsPage, NewsPageAR, NewsPageFR, NewsPageRU, NewsPageTR,

    allAboutPage, allAboutPageAR, allAboutPageFR, allAboutPageRU, allAboutPageTR,

    TheSpeakersPage, TheSpeakersPageAR, TheSpeakersPageFR, TheSpeakersPageRU, TheSpeakersPageTR,

    SchedPage, SchedPageAR, SchedPageFR, SchedPageRU, SchedPageTR,

    Dubai101Page, Dubai101PageAR, Dubai101PageFR, Dubai101PageRU, Dubai101PageTR,

    MerchandisePage, MerchandisePageAR, MerchandisePageFR, MerchandisePageRU, MerchandisePageTR,

    MarkPage, MarkPageAR, MarkPageFR, MarkPageRU, MarkPageTR,

    DownloadsPage, DownloadsPageAR, DownloadsPageFR, DownloadsPageRU, DownloadsPageTR,

    FaqsPage, FaqsPageAR, FaqsPageFR, FaqsPageRU, FaqsPageTR,
    ContactPage, ContactPageFR, ContactPageAR, ContactPageRU, ContactPageTR,

    ChangeLangPage,
    SplashPage,
    SplashnextPage, SplashnextPageAR, SplashnextPageFR, SplashnextPageRU, SplashnextPageTR,

    WheretoPage, WheretoPageAR, WheretoPageFR, WheretoPageRU, WheretoPageTR,

    WhattoPage, WhattoPageAR, WhattoPageFR, WhattoPageRU, WhattoPageTR,

    HowtoPage, HowtoPageAR, HowtoPageFR, HowtoPageRU, HowtoPageTR,

    VFPPage, VFPPageAR,  VFPPageFR, VFPPageRU, VFPPageTR,
    VMPPage, VMPPageAR,  VMPPageFR, VMPPageRU, VMPPageTR,
    VPahPage, VPahPageAR,  VPahPageFR, VPahPageRU, VPahPageTR,
    VPagPage, VPagPageAR,  VPagPageFR, VPagPageRU, VPagPageTR,
    VPcmPage, VPcmPageAR,  VPcmPageFR, VPcmPageRU, VPcmPageTR,
    VPdsPage, VPdsPageAR,  VPdsPageFR, VPdsPageRU, VPdsPageTR,
    VPdjPage, VPdjPageAR,  VPdjPageFR, VPdjPageRU, VPdjPageTR,
    VPdwPage, VPdwPageAR,  VPdwPageFR, VPdwPageRU, VPdwPageTR,
    VPdiPage, VPdiPageAR,  VPdiPageFR, VPdiPageRU, VPdiPageTR,
    VPmqPage, VPmqPageAR,  VPmqPageFR, VPmqPageRU, VPmqPageTR,
    VPftPage, VPftPageAR,  VPftPageFR, VPftPageRU, VPftPageTR,
    VPhnPage, VPhnPageAR,  VPhnPageFR, VPhnPageRU, VPhnPageTR,
    VPkpPage, VPkpPageAR,  VPkpPageFR, VPkpPageRU, VPkpPageTR,
    VPksPage, VPksPageAR,  VPksPageFR, VPksPageRU, VPksPageTR,
    VPmkPage, VPmkPageAR,  VPmkPageFR, VPmkPageRU, VPmkPageTR,
    VPpsPage, VPpsPageAR,  VPpsPageFR, VPpsPageRU, VPpsPageTR,
    VPrsPage, VPrsPageAR,  VPrsPageFR, VPrsPageRU, VPrsPageTR,
    VPssPage, VPssPageAR,  VPssPageFR, VPssPageRU, VPssPageTR,
    VPtgPage, VPtgPageAR,  VPtgPageFR, VPtgPageRU, VPtgPageTR


  ],
  imports: [
    BrowserModule, HttpModule, JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, HomePageAR,  HomePageFR, HomePageRU, HomePageTR,
    NewslandingPage, NewslandingPageAR,  NewslandingPageFR, NewslandingPageRU, NewslandingPageTR,

    NewsPage, NewsPageAR, NewsPageFR,  NewsPageRU, NewsPageTR,

    allAboutPage, allAboutPageAR, allAboutPageFR,  allAboutPageRU, allAboutPageTR,

    TheSpeakersPage, TheSpeakersPageAR,  TheSpeakersPageFR, TheSpeakersPageRU, TheSpeakersPageTR,

    SchedPage, SchedPageAR, SchedPageFR,  SchedPageRU, SchedPageTR,

    Dubai101Page, Dubai101PageAR, Dubai101PageFR,  Dubai101PageRU, Dubai101PageTR,

    MerchandisePage, MerchandisePageAR,  MerchandisePageFR, MerchandisePageRU, MerchandisePageTR,

    MarkPage, MarkPageAR,  MarkPageFR, MarkPageRU, MarkPageTR,

    DownloadsPage, DownloadsPageAR,  DownloadsPageFR, DownloadsPageRU, DownloadsPageTR,

    FaqsPage, FaqsPageAR,  FaqsPageFR, FaqsPageRU, FaqsPageTR,
    ContactPage,  ContactPageFR, ContactPageAR, ContactPageRU, ContactPageTR,
    ChangeLangPage,
    SplashPage,
    SplashnextPage, SplashnextPageAR, SplashnextPageFR,  SplashnextPageRU, SplashnextPageTR,

    WheretoPage, WheretoPageAR, WheretoPageFR,  WheretoPageRU, WheretoPageTR,

    WhattoPage, WhattoPageAR, WhattoPageFR,  WhattoPageRU, WhattoPageTR,

    HowtoPage, HowtoPageAR, HowtoPageFR,  HowtoPageRU, HowtoPageTR,
    VFPPage, VFPPageAR,  VFPPageFR, VFPPageRU, VFPPageTR,
    VMPPage, VMPPageAR,  VMPPageFR, VMPPageRU, VMPPageTR,
    VPahPage, VPahPageAR,  VPahPageFR, VPahPageRU, VPahPageTR,
    VPagPage, VPagPageAR,  VPagPageFR, VPagPageRU, VPagPageTR,
    VPcmPage, VPcmPageAR,  VPcmPageFR, VPcmPageRU, VPcmPageTR,
    VPdsPage, VPdsPageAR,  VPdsPageFR, VPdsPageRU, VPdsPageTR,
    VPdjPage, VPdjPageAR,  VPdjPageFR, VPdjPageRU, VPdjPageTR,
    VPdwPage, VPdwPageAR,  VPdwPageFR, VPdwPageRU, VPdwPageTR,
    VPdiPage, VPdiPageAR,  VPdiPageFR, VPdiPageRU, VPdiPageTR,
    VPmqPage, VPmqPageAR,  VPmqPageFR, VPmqPageRU, VPmqPageTR,
    VPftPage, VPftPageAR,  VPftPageFR, VPftPageRU, VPftPageTR,
    VPhnPage, VPhnPageAR,  VPhnPageFR, VPhnPageRU, VPhnPageTR,
    VPkpPage, VPkpPageAR,  VPkpPageFR, VPkpPageRU, VPkpPageTR,
    VPksPage, VPksPageAR,  VPksPageFR, VPksPageRU, VPksPageTR,
    VPmkPage, VPmkPageAR,  VPmkPageFR, VPmkPageRU, VPmkPageTR,
    VPpsPage, VPpsPageAR,  VPpsPageFR, VPpsPageRU, VPpsPageTR,
    VPrsPage, VPrsPageAR,  VPrsPageFR, VPrsPageRU, VPrsPageTR,
    VPssPage, VPssPageAR,  VPssPageFR, VPssPageRU, VPssPageTR,
    VPtgPage, VPtgPageAR,  VPtgPageFR, VPtgPageRU, VPtgPageTR
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    Deeplinks, File, FileTransfer, AndroidPermissions,
    Camera, Crop, PhotoLibrary, Base64ToGallery, SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network
  ]
})
export class AppModule {}
