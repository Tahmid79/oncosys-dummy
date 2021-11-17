import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule, MaterialModule, FlexLayoutModule, RouterModule
  ],
  exports: [MaterialModule, FlexLayoutModule, ToolbarComponent]
})
export class SharedModule { }
