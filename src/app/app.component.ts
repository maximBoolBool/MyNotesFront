import {HttpService} from "../Services/http.service";
import {Component} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {NoteListComponent} from "./note.list.component/note.list.component";
@Component({
  selector :  `app-root`,
  template : `<header-component (emmit)="addnote($event)" (authentication)="setNotes($event)"></header-component>
              <note-list [notes]="notes.notes"></note-list>`,
  providers : [HttpService]
})
export class AppComponent{
  notes:NoteListComponent = new NoteListComponent();
  constructor(private cookiesServices:CookieService) {}
  addnote(data:any){
    this.notes.notes.push(data);
  }
  setNotes(data:any){
    this.notes.notes = data;
  }
}
