/***********************************
* InfoPage
**********************************/
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-WelcomePage',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {

  }

  goHome() {
    this.navCtrl.setRoot(TabsPage, {});
  }
}
