import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleDropdownComponent } from './components/dropdown/simple-dropdown/simple-dropdown.component';
import { FormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './components/dropdown/custom-dropdown/custom-dropdown.component';
import { FormSelectDropdownComponent } from './components/dropdown/form-select-dropdown/form-select-dropdown.component';
import { ButtonDropdownComponent } from './components/dropdown/button-dropdown/button-dropdown.component';
import { AllDropdownsComponent } from './components/dropdown/all-dropdowns/all-dropdowns.component';
import { AngularMaterialDropdownComponent } from './components/dropdown/angular-material-dropdown/angular-material-dropdown.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'; 
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    AngularMaterialDropdownComponent,
  ],
  imports: [
    CustomDropdownComponent,
    FormSelectDropdownComponent,
    ButtonDropdownComponent,
    AllDropdownsComponent,
    SimpleDropdownComponent,
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatSelectModule, 
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
