import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesService } from './messages/messages.service';
import { LoginService } from './login/login.service';
import { throwIfAlreadyLoaded } from '../shared/guards/module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MessagesService,
    LoginService
  ]
})
export class ServicesModule {

  constructor( @Optional() @SkipSelf() parentModule: ServicesModule){
    throwIfAlreadyLoaded(parentModule, 'ServicesModule');
  }

}
