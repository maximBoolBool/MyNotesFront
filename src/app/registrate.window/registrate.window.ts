import {Component, EventEmitter, Output} from "@angular/core";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {HttpService} from "../../Services/http.service";
import {User} from "../user";
import {CookieService} from "ngx-cookie-service";


@Component({

  selector : `registrate-window`,
  styleUrls : ['registrate.window.css'],
  template : `

    <div class="window">

  <form [formGroup]="myForm" novalidate >

    <div class="">
        <input placeholder="Login" formControlName="Login" [(ngModel)]="user.login">
      <div
      *ngIf="myForm.controls['Login'].invalid
      && myForm.controls['Login'].touched" class="invalid--style">
        Enter the correct Login
      </div>
    </div>

    <div class="">
      <input placeholder="Password" formControlName="Password" [(ngModel)]="user.password">
      <div
        *ngIf="myForm.controls['Password'].invalid
      && myForm.controls['Password'].touched" class="invalid--style">
        Enter the correct Password
      </div>
    </div>
    <button class="button" (click)="Registrate()">Send</button>
  </form>
  </div>
  `
})


export class RegistrateWindow{
  myForm : FormGroup;
  constructor(private httpService:HttpService,private cookieService:CookieService){
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

  @Output() userReqestData = new EventEmitter();

  user:User = new User("","");

  Registrate(){
    this.httpService.Registrate(this.user)
      .subscribe({next : (data : any)=>{
        this.userReqestData.emit();
        this.cookieService.set("auth",data["response"]);
        }},
      )
  }
}
