
import {NgModule} from "@angular/core";
import {DownloadsPage} from "./downloads";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    DownloadsPage
  ],
  imports: [
    IonicPageModule.forChild(DownloadsPage)
  ],
  exports: [
    DownloadsPage
  ]
})
export class DownloadsPageModule {}

