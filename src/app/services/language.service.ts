
import { Events } from "ionic-angular";
import { MyApp } from "../app.component";

export class LanguageService {
    public static readonly UPDATE_MENU_LANGUAGE_EVENT = 'update_menu_lang';

    public static publishLanguageChange(events: Events) {
        events.publish(LanguageService.UPDATE_MENU_LANGUAGE_EVENT);
    }
}