/*******************************************************
* For the tab bar to exist on the page, it must be one of the tabs.
* This may not be entirely true, but I couldn't get it to work
* otherwise..
******************************************************/

import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { KeyPage } from '../key/key';
import { RSLSearchPage } from '../RSLSearch/RSLSearch';
import { RMLSearchPage } from '../RMLSearch/RMLSearch';
import { StartPage } from '../start/start';

@Component({
  selector: 'page-Tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StartPage;
  tab2Root = RSLSearchPage;
  tab3Root = RMLSearchPage;
  tab4Root = KeyPage;
  myIndex:number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
   //not sure how the below line works... there's no menu.ts
   //this.myIndex = navParams.data.tabIndex || 0;
   //the line below may do the same thing as the line above...
   if(navParams.get('tabIndex')) {
    this.myIndex = navParams.get('tabIndex');
   } else {
    this.myIndex = 0;
   }
  }

}
