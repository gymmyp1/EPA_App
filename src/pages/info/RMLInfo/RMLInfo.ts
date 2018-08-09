/*****************************************
* InfoPage
*******************************/
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-RMLInfoPage',
  templateUrl: 'RMLInfo.html'
})
export class RMLInfoPage {

  constructor(public navCtrl: NavController) {

  }

  goHome() {
    this.navCtrl.setRoot(TabsPage, {});
  }
}
