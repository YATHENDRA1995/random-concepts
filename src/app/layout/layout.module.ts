import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { MyCustomDirective } from '../directives/custom-color.directive';


@NgModule({
  declarations: [LayoutComponent, MyCustomDirective],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
