/*********************************************************
* Tutorial images and some buttons on a slider.
*
*********************************************************/
import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartPage } from '../start/start';

@Component({
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
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

    this.showToast();
  }

  slides = [
    {
      title: "Start Menu",
      description: "From the <b>Start Menu</b>, you have the option to retrieve either RSL or RML Screening Levels. Click the Home icon or the sidebar menu for other information.",
      image: "assets/img/start.png",
    },
    {
      title: "RML/RSL Search",
      description: "Choose which chemicals you want to retieve screening levels for. You may also use the searchbar to find specific chemicals. Click next to proceed.",
      image: "assets/img/chemicals.png",
    },
    {
      title: "Select Hazard Quotient and Target Risk",
      description: "Select one or both of the options. Click Next.",
      image: "assets/img/hazard.png",
    },
    {
      title: "Select Scenario",
      description: "Select one or both of the options. Click Next.",
      image: "assets/img/scenario.png",
    },
    {
      title: "Select Exposure Routes",
      description: "Select one or more of the options. Click Next to see your results.",
      image: "assets/img/exposure.png",
    },
    {
      title: "Results",
      description: "Here, you will see your requested information on a <b>chemical card</b>. To retrieve all available information for that chemical, click More Information at the bottom of the card. To favorite the chemical's information, tap the star. If you favorite a chemical card of a chemical that is already in your favorites, then the favorite card will be overwritten.",
      image: "assets/img/results.png",
    },
    {
      title: "Favorites",
      description: "<b>Favorites</b> allows you to quickly view previously retrieved chemicals. Use the side menu (top left of any of the main menus) to navigate to your favorites.",
      image: "assets/img/favorite.png",
    },
    {
      title: "Recent Search",
      description: "The results of your most recent RML/RSL Search will appear here.",
      image: "assets/img/doge.jpg",
    }
  ];

  //for handling back button
  presentToast() {
    let toast = this.toastCtrl.create({
      message: "Press again to exit",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: "Swipe left to navigate",
      duration: 3000,
      position: "bottom",
      cssClass: "swipe_left"
    });
    toast.present();
  }

  goToOtherPage() {
    this.navCtrl.setRoot(StartPage, {});
  }
}
