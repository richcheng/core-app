import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './components/widget/widget.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    WidgetComponent, 
    RouteNotFoundComponent 
  ],
  exports: [ 
    WidgetComponent
  ]
})
export class SharedModule { }
