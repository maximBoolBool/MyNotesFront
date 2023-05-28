import {Injectable} from "@angular/core";
import {HttpClient,HttpParams,HttpHeaders} from "@angular/common/http";
import {NoteComponent} from "../app/note.component/note.component";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class NoteWorkerService{

  constructor(private httpClient:HttpClient,private  cookies:CookieService) {}

  addNote(head:string,body:string){

    const params:HttpParams = new HttpParams()
      .set("head",head)
      .set("body",body)

    let token = this.cookies.get("auth");

    const header:HttpHeaders = new HttpHeaders().set("auth",token)

    return this.httpClient.post("https://localhost:7013/Note/AddNewNote",params,{headers:header})
  }
}
