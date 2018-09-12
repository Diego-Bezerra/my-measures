import { MyweekPage } from './../pages/myweek/myweek';
import { WeeksPage } from './../pages/weeks/weeks';
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { DatabaseProvider } from '../providers/database/database.provider';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { IonicStorageModule } from '@ionic/storage';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAF55wEGwdcZJf0KHqhp7q7XpRrPNAbpgg",
    authDomain: "my-measures-802f5.firebaseapp.com",
    databaseURL: "https://my-measures-802f5.firebaseio.com",
    storageBucket: "my-measures-802f5.appspot.com",
    messagingSenderId: "30331995431"
};

@NgModule({
  declarations: [MyApp, WeeksPage, MyweekPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, WeeksPage, MyweekPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatabaseProvider
  ]
})
export class AppModule {}
