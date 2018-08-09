/*****************************************************
* Has buttons that link to pages. YAY
*
*******************************************************/
import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})

export class StartPage {

  public counter = 0; //for handling back button

  constructor(public navCtrl: NavController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public toastCtrl: ToastController) {
    //For warning if they press back button
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter = 0 }, 3000)
        } else {
          // console.log("exitapp");
          platform.exitApp();
        }
      }, 0)
    });
  }

  //for handling back button
  presentToast() {
    let toast = this.toastCtrl.create({
      message: "Press again to exit",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  goHome() {
    this.navCtrl.setRoot(HomePage, {});
  }
  goToRSLSearch() {
    this.navCtrl.setRoot(TabsPage, {
      'tabIndex': 1
    });
  }
  goToRMLSearch() {
    this.navCtrl.setRoot(TabsPage, {
      'tabIndex': 2
    });
  }
  goToTutorial() {
    this.navCtrl.setRoot(TutorialPage, { });
  }
}
