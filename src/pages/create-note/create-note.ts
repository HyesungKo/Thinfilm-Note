import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Note } from '../../models/note/note.interface';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {

  private newNote: Note = {
    title: "",
    context: ""
  }

  constructor(private navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController) {
  }

  cancel() {
    this.navCtrl.pop();
  }

  /**
   * Save new note as Key/Value to storage pair to keep the note between app session
   * Key: the length of previous storage. Therefore, the key of the first note will be "0" and the key of the last note will be "length - 1"
   * Value: Object containing title and context based on what user types
   * It saves new note only if title and context are filled
   */
  save() {

    //The condition that both title and context are filled
    if(this.newNote.title !== "" && this.newNote.context !== "") {
      this.storage.length().then(index => {
        this.storage.set(index.toString(), {
          title: this.newNote.title,
          context: this.newNote.context
        }).then(() => {
          this.alertCtrl.create({
            title: "New Note is saved!",
            buttons: ['OK']
          }).present();
          this.navCtrl.pop();
        })
      })
    }
    //The condition that both title and context are not filled
    else {
      this.alertCtrl.create({
        title: "Title and context must be filled",
        buttons: ['OK']
      }).present();
    }
  }

}
