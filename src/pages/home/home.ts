/******************************************
* simple
******************************************/

import { Component } from '@angular/core';
import { NavController, Platform, Nav, Config, ToastController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, platform: Platform, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    platform.ready().then(()=>{
       platform.registerBackButtonAction(()=>this.myHandlerFunction());
    })
  }

  myHandlerFunction(){
   let toast = this.toastCtrl.create({
     message: "Press Again to Confirm Exit",
     duration: 3000
   });
    toast.present();
   }

}
