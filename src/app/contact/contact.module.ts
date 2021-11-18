import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactMainComponent } from './contact-main/contact-main.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';


@NgModule({
  declarations: [
    ContactMainComponent,
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactModule { }
