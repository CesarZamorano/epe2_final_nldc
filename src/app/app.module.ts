import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_INFO } from './firebase.info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseDataProvider } from '../providers/firebase-data/firebase-data';
import { FirestoreProvider } from '../providers/firestore/firestore';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDf7--O8ceBcCIgbx03epzBpmXES7dGhdQ",
    authDomain: "epe2final.firebaseapp.com",
    databaseURL: "https://epe2final.firebaseio.com",
    projectId: "epe2final",
    storageBucket: "",
    messagingSenderId: "701453664710"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    //iniciando la app con las credenciales de firebase
    AngularFireModule.initializeApp(FIREBASE_INFO),
    //importando AngularFireDatabaseModule interactuar con la base de datos
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDataProvider,
    FirestoreProvider
  ]
})
export class AppModule {}
