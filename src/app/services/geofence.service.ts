import { Geofence } from '@ionic-native/geofence';
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { AlertController } from "ionic-angular";

@Injectable()
export class GeofenceService {
    public static EVT_LOC_STATE = 'EVT_LOC_STATE';
    private static EVT_GEOFENCE_ID_IN = '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb';
    private static EVT_GEOFENCE_ID_OUT = '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdc';

    constructor(
        private geofence: Geofence,
        private storage: Storage,
        private androidPermissions: AndroidPermissions,
        private alertCtrl: AlertController
    ) { }

    canViewSchedule(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.storage.get(GeofenceService.EVT_LOC_STATE).then(state => {
                resolve(state);
            }).catch(e => {
                reject(e);
            });
        });
    }

    setupEventGeofence() {
        let intoFence = {
            id: GeofenceService.EVT_GEOFENCE_ID_IN,
            latitude: 25.0513009,
            longitude: 55.3179699,
            radius: 5000,
            transitionType: 1,
            notification: {
                id: 1,
                title: 'V-UAE #VCON17',
                text: `You can now view the schedule of the event!`,
                openAppOnClick: true
            }
        }
        let fromFence = {
            id: GeofenceService.EVT_GEOFENCE_ID_OUT,
            latitude: 25.0513009,
            longitude: 55.3179699,
            radius: 5000,
            transitionType: 2
        }

        this.storage.set(GeofenceService.EVT_LOC_STATE, {
            canViewSchedule: false,
            shouldTurnOnLocationServices: false,
            hasErrorInInitialization: false
        });

        this.geofence.onTransitionReceived().subscribe(g => {
            for (var i = 0; i < g.length; i++) {
                switch (g[i].notification.id) {
                    case GeofenceService.EVT_GEOFENCE_ID_IN:
                        this.storage.get(GeofenceService.EVT_LOC_STATE).then(s => {
                            s.canViewSchedule = true;
                            this.storage.set(GeofenceService.EVT_LOC_STATE, s);
                        });
                        break;
                    case GeofenceService.EVT_GEOFENCE_ID_OUT:
                        this.storage.get(GeofenceService.EVT_LOC_STATE).then(s => {
                            s.canViewSchedule = false;
                            this.storage.set(GeofenceService.EVT_LOC_STATE, s);
                        });
                        break;
                }
            }
        });

        this.geofence.addOrUpdate([intoFence, fromFence]).then(() => {
            this.storage.get(GeofenceService.EVT_LOC_STATE).then(s => {
                s.shouldTurnOnLocationServices = false;
                s.hasErrorInInitialization = false;
                this.storage.set(GeofenceService.EVT_LOC_STATE, s);
            });
        }).catch(e => {
            this.storage.get(GeofenceService.EVT_LOC_STATE).then(s => {
                s.shouldTurnOnLocationServices = e.code === 'PERMISSION_DENIED';
                s.hasErrorInInitialization = true;
                this.storage.set(GeofenceService.EVT_LOC_STATE, s);

                if (e.code === 'PERMISSION_DENIED') {
                    this.requestLocationPermission();
                } else {
                    let alert = this.alertCtrl.create({
                        title: 'Cannot enable geofencing',
                        subTitle: 'You will not be able to see the event\'s schedule. Cannot initialize geofencing without errors.',
                        buttons: [{
                            text: 'Ok',
                            handler: () => {
                                alert.dismiss();
                                return false;
                            }
                        }],
                        cssClass: 'alert'
                    });
                    alert.present();
                }
            });
        });
    }

    private requestLocationPermission() {
        this.androidPermissions.requestPermissions([
            this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
        ]).then(a => {
            if (!a.hasPermission) {
                let alert = this.alertCtrl.create({
                    title: 'Permission not allowed',
                    subTitle: 'You will not be able to see the event\'s schedule without enabling your location services.',
                    buttons: [{
                        text: 'Ok',
                        handler: () => {
                            alert.dismiss();
                            return false;
                        }
                    }, {
                        text: 'Enable',
                        handler: () => {
                            alert.dismiss();
                            this.requestLocationPermission();
                            return false;
                        }
                    }],
                    cssClass: 'alert'
                });
                alert.present();
            } else {
                this.setupEventGeofence();
            }
        });
    }
}