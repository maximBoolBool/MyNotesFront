import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../app/user";




@Injectable()
export class AutheficationService{
  constructor(private httpClient:HttpClient){}
  Authenticate(user:User){
    return this.httpClient.post('https://localhost:7013/Account/Authenticate',
      new HttpParams().set("login",user.login).set("password",user.password));
  }
}
