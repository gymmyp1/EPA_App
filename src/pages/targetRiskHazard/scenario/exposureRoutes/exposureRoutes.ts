/***************************************************************
* Get exposure routes from ChemicalContainer
*
**************************************************************/
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChemicalContainer } from '../../../Chemical_Container';
import { CardsPage } from './cards/cards';
import { TabsPage } from '../../../tabs/tabs';

@Component({
  selector: 'page-ExposureRoutesPage',
  templateUrl: 'exposureRoutes.html'
})
export class ExposureRoutesPage {
  items;
  checkboxes = [];
  //Is at least one scenario picked?
  oneChecked = false;
  data : ChemicalContainer;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data'); // get ChemicalContainer
    this.initializeItems();
    this.initializeCheckboxes();
  }

  initializeCheckboxes() {
    for (let item of this.items) {
      this.checkboxes[item] = false;
    }
  }

  toggleCheckboxes(item) {
    this.checkboxes[item] = !this.checkboxes[item];
  }

  getIcon(item):string{
    if (this.checkboxes[item]){
      return "checkbox-outline";
    }else{
      return "square-outline";
    }
  }

  goToOtherPage() {
    //Check if at least one box is checked before moving on
    this.data.clearExposureRoutes();
    for (let item of this.items) {
      if(this.checkboxes[item] == true) {
        this.oneChecked = true;
        this.data.addExposureRoute(item); //push to ChemicalContainer
      }
    }

    if(this.oneChecked == true) {
      this.navCtrl.push(CardsPage, {
        'data': this.data
      });
    } else {
        alert("Please select at least one option.");
      }
  }

  newSearch() {
    //if they originally started from RSL search, go back to that search. Else, go
    //to RML search.
    if(this.data.getScreeningType()[0] === this.data.getScreeningTypeOptions()[0]) {
      this.navCtrl.setRoot(TabsPage, {
        'tabIndex': 1
      });
    } else {
      this.navCtrl.setRoot(TabsPage, {
        'tabIndex': 2
      });
    }
  }

  checkAll() {
    for (let item of this.items) {
      this.checkboxes[item] = true;
    }
  }

  initializeItems() :void {
    this.items = this.data.getExposureRouteOptions();
  }
}
