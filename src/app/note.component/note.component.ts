import {Component, EventEmitter, Output} from "@angular/core";
import {Input} from "@angular/core";
import {DeleteUpdateNoteService} from "../../Services/delete.update.note.service";

@Component({
  selector : `note`,
  templateUrl : `note.component.html`,
  styleUrls : [`note.component.css`],
  providers : [DeleteUpdateNoteService]
})


export class NoteComponent{

  @Output() delete = new EventEmitter();

  @Input()id : number = 0;
  @Input()head : string = "";
  @Input()body :string = "";

  constructor(private deleteUpdateNote:DeleteUpdateNoteService) {}

  deleteNote(){
    this.deleteUpdateNote.deleteNote(this.id,this.head,this.body)
      .subscribe({
          next : (data :any) =>{
            console.log(data);
            this.delete.emit(this.id);
          }
        }
      );
  }




}
