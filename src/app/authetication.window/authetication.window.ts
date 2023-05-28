import {Component, EventEmitter, Output} from "@angular/core";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {HttpService} from "../../Services/http.service";
import {User} from "../user";
import {CookieService} from "ngx-cookie-service";
import {AutheficationService} from "../../Services/authefication.service";

@Component({
  selector : "authefication-window",
  templateUrl : `authetication.window.html`,
  styleUrls : [`autheticarion.window.css`],
  providers : [AutheficationService]
})

export  class AutheticationWindow{

  user:User = new User("","");
  myForm : FormGroup;
  constructor(private authService:AutheficationService,private cookieService:CookieService){
    this.myForm = new FormGroup({
      "Login" : new FormControl("",
        [
          Validators.required,
          Validators.pattern("[A-Za-z]{6,}")]),
      "Password" : new FormControl("",[
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")
      ])
    });
  }

  @Output() autheticationEmmiter : EventEmitter<any> = new EventEmitter<any>();

  authetication(){
    this.authService.Authenticate(this.user).subscribe(
      {next : (data:any)=>{
        this.cookieService.set("auth",data["response"]);
        this.autheticationEmmiter.emit(data["response"]);
        }}
    );
  }



}
