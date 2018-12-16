import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private iab: InAppBrowser) {
    
  }

  //navigate to CreateNotePage
  navigateToCreateNote() {
    this.navCtrl.push('CreateNotePage');
  }

  //navigate to NotesPage
  navigateToNotes() {
    this.navCtrl.push('NotesPage');
  }

  //Launch 'https://thinfilmnfc.com' on in-app browser
  openThinfilm() {
    this.iab.create('https://thinfilmnfc.com', '_self');
  }

}
