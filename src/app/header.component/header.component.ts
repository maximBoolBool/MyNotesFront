import {Component, EventEmitter, Output} from "@angular/core";
@Component({

  selector : "header-component",
  template : `
    <div class="header">
  <button class="button" (click)="showRegistrateWindow()">Registrate</button>
  <button class="button" (click)="showAuthorize()">Autheticate</button>
  <button class="button" (click)="showAddNoteWindow()">Add Note</button>
    </div>
    <div class="showUp">
      <registrate-window *ngIf="isRegistrate" (userReqestData)="showRegistrateWindow()"> </registrate-window>
      <authefication-window *ngIf="isAuthorize" (autheticationEmmiter)="authetication($event)"> </authefication-window>
      <add-window *ngIf="isAddNote" (emitter)="send($event)"></add-window>
    </div>
  `,
  styleUrls : ["header.component.css"]
})


export class HeaderComponent{
    @Output() emmit: EventEmitter<any> = new EventEmitter<any>();
    @Output() authentication:EventEmitter<any> = new EventEmitter<any>();
    isRegistrate : boolean = false;
    isAuthorize : boolean = false;
    isAddNote : boolean = false;
    showRegistrateWindow(){
      this.isRegistrate = !this.isRegistrate;
    }
    showAddNoteWindow(){
      this.isAddNote = !this.isAddNote;
    }
    showAuthorize(){
      this.isAuthorize = !this.isAuthorize;
    }
    send(dat:any){
      this.emmit.emit(dat);
      this.showAddNoteWindow();
    }
    authetication(data:any){
      this.authentication.emit(data);
      this.showAuthorize()
    }
}
