import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'core works!';
 
  constructor(){ }

  ngOnInit(): void { }

}
