import {Component, Input} from "@angular/core";
import {NoteComponent} from "../note.component/note.component";

@Component({
  selector : `note-list`,
  templateUrl : `note.list.component.html`,
  styleUrls : [`note.list.component.css`]
})

export class NoteListComponent{
  @Input() notes : NoteComponent[] = [];
  notesBuff : NoteComponent[] = [];
  deleteNote(id:number){
    this.notes  = this.notes.filter((e,i)=> e.id != id );
  }
}
