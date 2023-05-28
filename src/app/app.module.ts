import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "../Services/http.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NoteComponent} from "./note.component/note.component";
import {NoteListComponent} from "./note.list.component/note.list.component";
import {CookieService} from "ngx-cookie-service";
import {HeaderComponent} from "./header.component/header.component";
import {RegistrateWindow} from "./registrate.window/registrate.window";
import {AddNewWindowComponent} from "./add.new.note.window/add.new.window.component";
import {AutheticationWindow} from "./authetication.window/authetication.window";

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteListComponent,
    HeaderComponent,
    RegistrateWindow,
    AddNewWindowComponent,
    AutheticationWindow
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
