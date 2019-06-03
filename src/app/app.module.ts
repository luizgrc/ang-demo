import { AppRoutingModule } from './app-routing.module';
import { CompA } from './comp-a/componente-a.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SubAComponent } from './comp-a/sub-a/sub-a.component';
import { SubBComponent } from './comp-a/sub-b/sub-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CompA,
    CompBComponent,
    CompCComponent,
    SubAComponent,
    SubBComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
