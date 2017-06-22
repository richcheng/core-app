import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { MessagesService } from '../../../services/messages/messages.service';

@Component({
  selector: 'lx-button',
  templateUrl: './lx-button.component.html',
  styleUrls: ['./lx-button.component.less']
})
export class LxButtonComponent implements OnInit {
  @Input() meta:any;
  @Input() labelMsgId:string;  
 
 constructor(public messagesService: MessagesService) { 
  }

  ngOnInit() {
  }

}
