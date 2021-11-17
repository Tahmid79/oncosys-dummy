import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const exports = [MatToolbarModule, MatIconModule, MatButtonModule] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: exports
})
export class MaterialModule { }
