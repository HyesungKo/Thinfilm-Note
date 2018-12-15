import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note/note.interface';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  private notes: Note[] = [];

  constructor(private storage: Storage) {
    
  }

  ionViewDidLoad() {
    /**
     * retrieve all notes from storage 
     * Note will be displayed lastest note first
     */
    this.storage.forEach(note => {
      this.notes.push({
        title: note.title,
        context: note.context
      })
    }).then(() => {
      this.notes.reverse();
    })
  }
}
