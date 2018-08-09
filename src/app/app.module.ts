/*******************************************************************
* If you want something new, be it a page or a package, it must
* be included here. Independent classes are the exception
******************************************************************/

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';

import { RSLInfoPage } from '../pages/info/RSLInfo/RSLInfo';
import { RMLInfoPage } from '../pages/info/RMLInfo/RMLInfo';
import { WelcomePage } from '../pages/info/welcome/welcome';

import { StaffPage } from '../pages/contact/staff/staff';

import { StartPage } from '../pages/start/start';
import { RSLSearchPage } from '../pages/RSLSearch/RSLSearch';
import { RMLSearchPage } from '../pages/RMLSearch/RMLSearch';

import { TargetRiskHazardPage } from '../pages/targetRiskHazard/targetRiskHazard';
import { ScenarioPage } from '../pages/targetRiskHazard/scenario/scenario';
import { ExposureRoutesPage } from '../pages/targetRiskHazard/scenario/exposureRoutes/exposureRoutes';
import { CardsPage } from '../pages/targetRiskHazard/scenario/exposureRoutes/cards/cards';
import { ChemDetailsPage } from '../pages/targetRiskHazard/scenario/exposureRoutes/cards/chemDetails/chemDetails';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FavDetailsPage } from '../pages/favorites/favDetails/favDetails';
import { KeyPage } from '../pages/key/key';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { RecentPage } from '../pages/recent/recent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// I think you have to link all these here.
import { HTTP } from '@ionic-native/http';
import { File } from '@ionic-native/file';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';


@NgModule({
  declarations: [ // link all pages here
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    TargetRiskHazardPage,
    ScenarioPage,
    ExposureRoutesPage,
    CardsPage,
    ChemDetailsPage,
    StaffPage,
    InfoPage,
    RSLInfoPage,
    RMLInfoPage,
    WelcomePage,
    FavoritesPage,
    FavDetailsPage,
    KeyPage,
    RMLSearchPage,
    RSLSearchPage,
    StartPage,
    TutorialPage,
    RecentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [ // and here
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage ,
    TargetRiskHazardPage,
    ScenarioPage,
    ExposureRoutesPage,
    CardsPage,
    ChemDetailsPage,
    StaffPage,
    InfoPage,
    RSLInfoPage,
    RMLInfoPage,
    WelcomePage,
    FavoritesPage,
    FavDetailsPage,
    KeyPage,
    RMLSearchPage,
    RSLSearchPage,
    StartPage,
    TutorialPage,
    RecentPage
  ],
  providers: [ // list all used packages here
    StatusBar,
    SplashScreen,
    HTTP,
    File,
    SQLite,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
