import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

  private serviceUrl = 'https://services.lexus.monster.com/core/api/security/local-login';
  public loginToken: string = '';
  public errorMsg: string;
  // following variables set only for testing
  private userName:string = 'test600@monster.com';
  private password:string = 'Test123-';
  private channelId:string = '10338';
  private appId:string = 'Lexus';

  constructor(private _http: Http) { }

  sendLoginData(){
    let headers = new Headers({'Content-Type':'application/json'});
    headers.append('ChannelID', this.channelId);
    headers.append('AppID', this.appId);
    let options = new RequestOptions({headers: headers});
    let requestData = {email: this.userName, password: this.password};
    let body = JSON.stringify(requestData);
    return this._http.post(this.serviceUrl, body, options)
      .map((response: Response) => {return response.json()}).catch(this.handleError);
  }

  login(){ 
    if(!this.loginToken){
      this.sendLoginData().subscribe(loginResult => {
        console.log(loginResult);
        if(loginResult && loginResult.authentication && loginResult.authentication.token){
          this.loginToken = loginResult.authentication.token;
        }
     }, err => console.log("Login error:", err.statusText));  
    }
    return null;
  }

  handleError(error: Response){
    console.log(error);
    return Observable.throw(error);
  }

}