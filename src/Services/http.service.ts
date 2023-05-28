import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../app/user";



@Injectable()
export class HttpService{

  constructor(private http:HttpClient) {}

  Registrate(user:User){
    return this.http.post('https://localhost:7013/Account/Registrate',
      new HttpParams().set("login", user.login).set("password", user.password));
  }

  Authenticate(user:User){
    return this.http.post('https://localhost:7013/Account/Authenticate',
      new HttpParams().set("login",user.login).set("password",user.password));
  }
}
