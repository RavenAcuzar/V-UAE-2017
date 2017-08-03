
import {NgModule} from "@angular/core";
import {DownloadsPage} from "./downloads";
import {IonicPageModule} from "ionic-angular";
import {DownloadsPageTR} from "../downloads-tr/downloads-tr";
import {DownloadsPageRU} from "../downloads-ru/downloads-ru";
import {DownloadsPageID} from "../downloads-id/downloads-id";
import {DownloadsPageFR} from "../downloads-fr/downloads-fr";
import {DownloadsPageAR} from "../downloads-ar/downloads-ar";

@NgModule({
  declarations: [
    DownloadsPage,
    DownloadsPageAR,
    DownloadsPageFR,
    DownloadsPageID,
    DownloadsPageRU,
    DownloadsPageTR
  ],
  imports: [
    IonicPageModule.forChild(DownloadsPage),
    IonicPageModule.forChild(DownloadsPageAR),
    IonicPageModule.forChild(DownloadsPageFR),
    IonicPageModule.forChild(DownloadsPageID),
    IonicPageModule.forChild(DownloadsPageRU),
    IonicPageModule.forChild(DownloadsPageTR),
  ],
  exports: [
    DownloadsPage,
    DownloadsPageAR,
    DownloadsPageFR,
    DownloadsPageID,
    DownloadsPageRU,
    DownloadsPageTR
  ]
})
export class DownloadsPageModule {}

