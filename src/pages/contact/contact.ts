/*****************************************************
* Information on where to contact us. I would like
* to have this have a built in messenger service
* someday .
**************************************************/

import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StaffPage } from './staff/staff';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public counter = 0; //for handling back button

  fred = 'Fred Dolislager';
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
  
  staffSelected(staffMember: string) {
    this.navCtrl.push(StaffPage, {
      'staffMember': staffMember,
      'staff' : this.fred
    });
  }
}
