/******************************************
* links to two info pages
******************************************/
import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RMLInfoPage } from './RMLInfo/RMLInfo';
import { RSLInfoPage } from './RSLInfo/RSLInfo';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
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

  goToRML () {
    this.navCtrl.push(RMLInfoPage, {

    });
  }

  goToRSL () {
    this.navCtrl.push(RSLInfoPage, {

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
}
