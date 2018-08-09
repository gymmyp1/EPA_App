/***********************************
* InfoPage
**********************************/
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-RSLInfoPage',
  templateUrl: 'RSLInfo.html'
})
export class RSLInfoPage {

  constructor(public navCtrl: NavController) {

  }

  goHome() {
    this.navCtrl.setRoot(TabsPage, {});
  }
}
