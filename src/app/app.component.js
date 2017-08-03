var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { allAboutPage } from '../pages/allabout/allabout';
import { NewslandingPage } from '../pages/newslanding/newslanding';
import { NewsPage } from '../pages/news/news';
import { TheSpeakersPage } from '../pages/thespeakers/thespeakers';
import { SchedPage } from '../pages/sched/sched';
import { Dubai101Page } from '../pages/dubai101/dubai101';
import { MerchandisePage } from '../pages/merchandise/merchandise';
import { MarkPage } from '../pages/mark/mark';
import { DownloadsPage } from '../pages/downloads/downloads';
import { FaqsPage } from '../pages/faqs/faqs';
import { ContactPage } from '../pages/contact/contact';
import { VFPPage } from '../pages/vfp-joseph-bismark/vfp-joseph-bismark';
import { VMPPage } from '../pages/vmp-dato-sri-vijay-eswaran/vmp-dato-sri-vijay-eswaran';
import { VPahPage } from '../pages/vp-adly-hassan/vp-adly-hassan';
import { VPagPage } from '../pages/vp-arun-george/vp-arun-george';
import { VPcmPage } from '../pages/vp-cherian-mathew/vp-cherian-mathew';
import { VPdsPage } from '../pages/vp-david-sharma/vp-david-sharma';
import { VPdjPage } from '../pages/vp-dev-johl/vp-dev-johl';
import { VPdwPage } from '../pages/vp-dev-wadhwani/vp-dev-wadhwani';
import { VPdiPage } from '../pages/vp-donna-imson/vp-donna-imson';
import { VPmqPage } from '../pages/vp-dr-motaz-qais/vp-dr-motaz-qais';
import { VPftPage } from '../pages/vp-ferdie-tolentino/vp-ferdie-tolentino';
import { VPhnPage } from '../pages/vp-hendra-nilam/vp-hendra-nilam';
import { VPkpPage } from '../pages/vp-kpadma/vp-kpadma';
import { VPksPage } from '../pages/vp-kuna-senathirajah/vp-kuna-senathirajah';
import { VPmkPage } from '../pages/vp-mahendra-kumar/vp-mahendra-kumar';
import { VPpsPage } from '../pages/vp-pathman-senathirajah/vp-pathman-senathirajah';
import { VPrsPage } from '../pages/vp-ranjit-singh/vp-ranjit-singh';
import { VPtgPage } from '../pages/vp-tg-kintanar/vp-tg-kintanar';
import { WhattoPage } from '../pages/whatto/whatto';
import { WheretoPage } from '../pages/whereto/whereto';
import { HowtoPage } from '../pages/howto/howto';
import { SplashPage } from '../pages/splash/splash';
import { Deeplinks } from "@ionic-native/deeplinks";
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, deeplink) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.deeplink = deeplink;
        this.rootPage = SplashPage;
        this.initializeApp();
        // switch(window.localStorage['mylanguage'])
        // {
        //   case 'en':
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'All About V-UAE 2017', component: allAboutPage },
            { title: 'News and Updates', component: NewslandingPage },
            { title: 'The Speakers', component: TheSpeakersPage },
            { title: 'Daily Program Schedule', component: SchedPage },
            { title: 'Dubai 101', component: Dubai101Page },
            { title: 'Merchandise', component: MerchandisePage },
            { title: 'Make Your V-Con Mark', component: MarkPage },
            { title: '#VUAE17 Wallpapers', component: DownloadsPage },
            { title: 'FAQs', component: FaqsPage },
            { title: 'Contact Us', component: ContactPage },
            { title: 'Change Language', component: SplashPage }
        ];
        // break;
        // case 'ar':
        //     this.pages = [
        //       { title: 'الرئيسية', component: HomePageAR },
        //       { title: 'كل ما يخص V-UAE 2017', component: allAboutPageAR },
        //       { title: 'الأخبار والمستجدات', component: NewslandingPageAR },
        //       { title: 'المتحدثين', component: TheSpeakersPageAR },
        //       { title: 'الجدول اليومي للبرنامج', component: SchedPageAR },
        //       { title: 'دبي 101', component: Dubai101PageAR },
        //       { title: 'معروضات #VCON17', component: MerchandisePageAR },
        //       { title: 'ضع علامتك للفي-كون', component: MarkPageAR },
        //       { title: 'صور خلفيات #VCON17', component: DownloadsPageAR },
        //       { title: 'الأسئلة الشائعة', component: FaqsPageAR },
        //       { title: 'اتصل بنا', component: ContactPageAR },
        //       { title: 'أختار اللغة', component: SplashPage }
        //     ];
        // break;
        // case 'fr':
        //     this.pages = [
        //       { title: 'ACCUEIL', component: HomePageFR },
        //       { title: 'Tout sur le V-UAE 2017', component: allAboutPageFR },
        //       { title: 'Actualité et Mises à jour', component: NewslandingPageFR },
        //       { title: 'Les Orateurs', component: TheSpeakersPageFR },
        //       { title: 'Grille de programme quotidienne', component: SchedPageFR },
        //       { title: 'Dubai 101', component: Dubai101PageFR },
        //       { title: 'Marchandise', component: MerchandisePageFR },
        //       { title: 'Faites votre marque V-Con', component: MarkPageFR },
        //       { title: '#VUAE17 Fonds d’écran', component: DownloadsPageFR },
        //       { title: 'FAQs', component: FaqsPageFR },
        //       { title: 'Contactez-nous', component: ContactPageFR },
        //       { title: 'Sélectionnez une langue', component: SplashPage }
        //     ];
        //   break;
        //   case 'id':
        //     this.pages = [
        //       { title: 'Home', component: HomePageID },
        //       { title: 'All About V-UAE 2017', component: allAboutPageID },
        //       { title: 'News and Updates', component: NewslandingPageID },
        //       { title: 'The Speakers', component: TheSpeakersPageID },
        //       { title: 'Daily Program Schedule', component: SchedPageID },
        //       { title: 'Dubai 101', component: Dubai101PageID },
        //       { title: 'Merchandise', component: MerchandisePageID },
        //       { title: 'Make Your V-Con Mark', component: MarkPageID },
        //       { title: '#VUAE17 Wallpapers', component: DownloadsPageID },
        //       { title: 'FAQs', component: FaqsPageID },
        //       { title: 'Contact Us', component: ContactPageID },
        //       { title: 'Change Language', component: SplashPage }
        //     ];
        //   break;
        //   case 'ru':
        //     this.pages = [
        //       { title: 'ДОМАШНЯЯ СТРАНИЦА', component: HomePageRU },
        //       { title: 'Всё о V-UAE 2017', component: allAboutPageRU },
        //       { title: 'Новости и объявления', component: NewslandingPageRU },
        //       { title: 'Спикеры', component: TheSpeakersPageRU },
        //       { title: 'Ежедневное расписание', component: SchedPageRU },
        //       { title: 'Дубай 101', component: Dubai101PageRU },
        //       { title: 'Товары #VCON17', component: MerchandisePageRU },
        //       { title: 'Сделай свой значок V-Con', component: MarkPageRU },
        //       { title: 'Обои #VCON17', component: DownloadsPageRU },
        //       { title: 'Вопросы-ответы', component: FaqsPageRU },
        //       { title: 'Контакты', component: ContactPageRU },
        //       { title: 'Выбор языка', component: SplashPage }
        //     ];
        //   break;
        //   case 'tr':
        //     this.pages = [
        //       { title: 'ANA SAYFA', component: HomePageTR },
        //       { title: 'V-UAE 2017 Hakkında Her Şey', component: allAboutPageTR },
        //       { title: 'Haberler ve Güncellemeler', component: NewslandingPageTR },
        //       { title: 'Konuşmacılar', component: TheSpeakersPageTR },
        //       { title: 'Günlük Program ', component: SchedPageTR },
        //       { title: 'Dubai 101', component: Dubai101PageTR },
        //       { title: 'V-UAE 2017 Ürünleri', component: MerchandisePageTR },
        //       { title: 'V-Con İzinizi Oluşturun', component: MarkPageTR },
        //       { title: 'V-UAE 2017 Duvar Kağıtları', component: DownloadsPageTR },
        //       { title: 'SSS', component: FaqsPageTR },
        //       { title: 'Bizimle İletişime Geçin', component: ContactPageTR },
        //       { title: 'Dil Seçin', component: SplashPage }
        //     ];
        //   break;
        // }
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.deeplink.routeWithNavController(_this.nav, {
                '/splash': SplashPage,
                '/home': HomePage,
                '/about': allAboutPage,
                '/contact': ContactPage,
                '/download-wallpaper': DownloadsPage,
                '/dubai101': Dubai101Page,
                '/dubai101/where-to-stay': WheretoPage,
                '/dubai101/what-to-do': WhattoPage,
                '/dubai101/how-to-get-around': HowtoPage,
                '/speakers': TheSpeakersPage,
                '/speakers/vfp-joseph-bismark': VFPPage,
                '/speakers/vmp-dato-sri-vijay-eswaran': VMPPage,
                '/speakers/vp-adly-hassan': VPahPage,
                '/speakers/vp-arun-george': VPagPage,
                '/speakers/vp-cherian-mathew': VPcmPage,
                '/speakers/vp-david-sharma': VPdsPage,
                '/speakers/vp-dev-johl': VPdjPage,
                '/speakers/vp-dev-wadhwani': VPdwPage,
                '/speakers/vp-donna-imson': VPdiPage,
                '/speakers/vp-dr-motaz-qais': VPmqPage,
                '/speakers/vp-ferdie-tolentino': VPftPage,
                '/speakers/vp-hendra-nilam': VPhnPage,
                '/speakers/vp-kpadma': VPkpPage,
                '/speakers/vp-kuna-senathirajah': VPksPage,
                '/speakers/vp-mahendra-kumar': VPmkPage,
                '/speakers/vp-pathman-senathirajah': VPpsPage,
                '/speakers/vp-ranjit-singh': VPrsPage,
                '/speakers/vp-tg-kintanar': VPtgPage,
                '/schedule': SchedPage,
                '/merchandise': MerchandisePage,
                '/vcon-mark': MarkPage,
                '/faqs': FaqsPage,
                '/news-and-updates': NewslandingPage,
                '/news-and-updates/:id': NewsPage
            }).subscribe(function (match) {
                // match.$route - the route we matched, which is the matched entry from the arguments to route()
                // match.$args - the args passed in the link
                // match.$link - the full link data
                //this.nav.setRoot(match.$route);
                console.log('Successfully matched route', match);
            }, function (nomatch) {
                // nomatch.$link - the full link data
                console.error('Got a deeplink that didn\'t match', nomatch);
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen,
        Deeplinks])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map