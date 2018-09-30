import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {JobPostComponent} from './jobPost/jobPost.component';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent, JobPostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
