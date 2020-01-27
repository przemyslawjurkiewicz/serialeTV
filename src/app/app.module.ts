import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";

import { JwPaginationComponent } from 'jw-angular-pagination';
import { SeriesService } from './services/series.service';
import { SeriesEffect } from './effects/series.effect';
import { reducers } from './reducers/index';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CartComponent } from './components/cart/cart.component';
import  {TruncatePipe} from "./params/truncate.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    JwPaginationComponent,
    CartComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
  EffectsModule.forRoot([SeriesEffect])
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
