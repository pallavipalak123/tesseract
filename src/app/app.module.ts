import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { RlTagInputModule } from 'angular2-tag-input';
// import {TagInputComponent} from 'angular2-tag-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';

import { IncidentService } from './service/data.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RlTagInputModule,
    HttpModule,
    FormsModule,
    NguiAutoCompleteModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
