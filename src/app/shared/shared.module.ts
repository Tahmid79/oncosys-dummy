import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, MaterialModule, FlexLayoutModule, RouterModule
  ],
  exports: [MaterialModule, FlexLayoutModule, ToolbarComponent, FooterComponent]
})
export class SharedModule { }
