import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { EngineerComponent } from "./components/engineer/engineer.component";
import { EngineerUpdateComponent } from "./components/engineer/engineer-update.component";
import { EngineerCreateComponent } from "./components/engineer/engineer-create.component";
import { ApiService } from "./services/api.service";
import { AppRoutingModule } from "./router/app-route.module";
import {CalendarModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    EngineerComponent,
    EngineerUpdateComponent,
    EngineerCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
