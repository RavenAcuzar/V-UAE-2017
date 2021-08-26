# ![App Icon](https://github.com/RavenAcuzar/V-UAE-2017/blob/master/resources/android/icon/drawable-xhdpi-icon.png) 
# V-UAE #VUAE2017 (OLD Version)

The V-UAE 2017 mobile app is made for all limitless V-Con participants.

The V-UAE 2017 mobile app is made for all V-Con participants, who aim to make the most of an unbelievable, life-changing experience. It is packed with interactive and comprehensive features such as downloadable wallpapers, #VUAE2018-marked photo generator, daily program schedule, exclusive V-Con merchandise dock, and regular news and updates! You can even select the language of your choice to use the app in English, Arabic, French, Russian, or Turkish!

Download now on [AppStore](https://apps.apple.com/ph/app/v-uae-vuae2018/id1144318387)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Setup the following requirements to your local machine.

- [Node.js](https://nodejs.org/en/)
- [Setup Ionic](https://ionicframework.com/docs/intro/cli)
- [Setup Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [IOS Development](https://ionicframework.com/docs/developing/ios)
- [Android Development](https://ionicframework.com/docs/developing/android)

### Initialize

Create ionic starter app.
```
ionic start VUAEApp https://github.com/RavenAcuzar/V-UAE-2017
```
Initialize node packages (This is a very old project. Possible errors can be encountered with deprecated packages used.)
```
npm i
```
Run the app.
```
ionic serve
```
To add platform (Android/IOS)
```
ionic cordova platform add android
```
```
ionic cordova platform add ios
```

### Build App

Run the following commands for building the app.
(Android) For generating release apk add `--prod --release`
```
ionic cordova build android
```
(IOS) For generating release apk add `--prod`. Open project in XCode then run build, Archive, then upload to Appstore.
```
ionic cordova build ios
```

##Key Features
- Downloadable wallpapers.
- Responsive Design (Mobile and Tablet optimized).
- Downloadable photo frame generator with social sharing.
- Program schedule (Only show program schedule based on location `Geofencing`).
- Deeplink

## Built with

* Ionic 2 (Ionic-Angular Framework)
* Typescript
* HTML, Css/Scss

## Authors and Contributors

* **Rico Raven Acuzar** - [linkedin.com/in/rico-raven/](https://www.linkedin.com/in/rico-raven/)
* **Bryan Dela Cruz** - [github.com/bmdelacruz](https://github.com/bmdelacruz)
* **Ralph Marting Mabeza** (Designer) - [github.com/alpmobs](https://github.com/alpmobs)

