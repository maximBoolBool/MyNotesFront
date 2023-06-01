import {Component, EventEmitter, Output} from "@angular/core";
import {NoteWorkerService} from "../../Services/note.worker.service";

@Component({
  selector: 'add-window',
  templateUrl : 'add.new.window.component.html',
  styleUrls : ['add.new.component.css'],
  providers : [NoteWorkerService]
})


export class AddNewWindowComponent{

    @Output() emitter:EventEmitter<any>  = new EventEmitter<any>();

    constructor(private noteServices:NoteWorkerService) {}


    head:string = "";
    body:string = "";

    requestNewNote(){
      this.noteServices.addNote(this.head,this.body).subscribe({
        next:(data:any)=>{
          this.emitter.emit(data);
        }
      })
    }



}
