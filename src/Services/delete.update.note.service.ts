import {Injectable} from "@angular/core";
import {HttpParams,HttpClient} from "@angular/common/http";
import {NoteComponent} from "../app/note.component/note.component";



@Injectable()
export class DeleteUpdateNoteService{


  constructor(private httpClient:HttpClient) {}


  deleteNote(id:number,head:string,body:string){



    return this.httpClient.post('https://localhost:7013/Note/DeleteNote',new HttpParams()
      .set("id",id).set("head",head).set("body",body));


  }




}
