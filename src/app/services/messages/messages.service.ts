import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MessagesService {

  messageCache = [];

  private serviceUrl = 'https://services.lexus.monster.com/core/api/config/messages';

  constructor(private _http: Http) { }

  loadMessages(messageIds){ 
    this.getMessages(messageIds).subscribe(messages => {
      this.addMessagesToCache(messages.messages);
    }, err => console.log(err));  
    return null;
  }

  msg(messageId){
    if(messageId){ 
      var i = 0, cacheLength = this.messageCache.length;
      for (i; i<cacheLength; i++){
        if(this.messageCache[i].id == messageId){
          return this.messageCache[i].text;
        } 
      }
    }
    return null;
  }

  getMessages(messageIds){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    var notCachedMessageIds = this.removeCachedMessages(messageIds);
    let messagesRequestData = this.getRequestData(notCachedMessageIds);
    let body = JSON.stringify(messagesRequestData);
    return this._http.post(this.serviceUrl, body, options)
      .map((response: Response) => {return response.json()}).catch(this.handleError);
  }

  addMessagesToCache(messages){
    if(messages && messages.length){
      this.messageCache = this.messageCache.concat(messages);
    }
  }

  removeCachedMessages(messageIds){
    if(messageIds && messageIds.length){
      if(this.messageCache && this.messageCache.length){
        var newMessageIds = [];
        var i = 0, length = messageIds.length;
        var j = 0, cacheLength = this.messageCache.length;
        for(i; i<length; i++){
          let cached = 0;
          for (j=0; j<cacheLength;j++){
            if(this.messageCache[j].id == messageIds[i]){
              cached++;
              break;
            }
          }
          if(cached == 0){
            newMessageIds.push(messageIds[i]);
          }
        }
        return newMessageIds;
      }
      return messageIds;
    }
    return false;
  }

  getRequestData(messageIds){
    if(messageIds && messageIds.length){
      var i = 0, length = messageIds.length;
      var requestData = {messages: []};
      for(i; i<length; i++){
        requestData.messages.push({id:messageIds[i]});
      }
      return requestData;
    }
  }

  handleError(error: Response){
    return Observable.throw(error);
  }

}
