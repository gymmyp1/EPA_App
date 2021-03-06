/*********************************************************
* Tutorial images and some buttons on a slider.
*
*********************************************************/
import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-TutorialPage',
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
      description: "From the <b>Start Menu</b>, you have the option to retrieve either RSL or RML Screening Levels. Tap the Home icon, sidebar menu, or one of the tabs on the bottom for more information.",
      image: "assets/img/start.png",
    },
    {
      title: "RML/RSL Search",
      description: "Choose which chemicals you want to retieve screening levels for. You may also use the searchbar to find specific chemicals. Tap Next to proceed or All Values to retrieve all available screening values.",
      image: "assets/img/search.png",
    },
    {
      title: "Select Hazard Quotient and Target Risk",
      description: "Select your desired hazard quotient and target risk. RSL Search will present different values than RML Search. Tap Next.",
      image: "assets/img/targetrisk.png",
    },
    {
      title: "Select Scenario",
      description: "Select one or both scenarios, then tap Next.",
      image: "assets/img/scenario.png",
    },
    {
      title: "Select Media",
      description: "Select one or more media. Options will change dynamically depending on the selected scenario. Tap Next to see your results.",
      image: "assets/img/media.png",
    },
    {
      title: "Results",
      description: "Results are displayed on a <b>chemical card</b>. To retrieve all available information for that chemical, click More Information at the bottom of the card. To favorite the chemical's information, tap the star.",
      image: "assets/img/results.png",
    },
    {
      title: "Favorites",
      description: "<b>Favorites</b> allows you to quickly view previously retrieved chemicals. Use the side menu to navigate to your favorites.",
      image: "assets/img/favorites.png",
    },
    {
      title: "Overwrite Favorites",
      description: "If you favorite a chemical card of a chemical that is already in your favorites, the existing favorite will be <b>overwritten</b>.",
      image: "assets/img/alert.png",
    },
    {
      title: "Recent Search",
      description: "The results of your most recent RML/RSL Search will appear here. The list will be reset each time you retrieve results from RSL or RML Search. Access it from the side menu.",
      image: "assets/img/recent.png",
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
    this.navCtrl.setRoot(TabsPage, {});
  }
}
