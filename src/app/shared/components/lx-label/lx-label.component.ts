import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages.service';

@Component({
  selector: 'lx-label',
  templateUrl: './lx-label.component.html',
  styleUrls: ['./lx-label.component.less']
})
export class LxLabelComponent implements OnInit {
  @Input() meta:any;
  @Input() labelMsgId:string;  
 
 constructor(public messagesService: MessagesService) { 
  }

  ngOnInit() {
  }

}