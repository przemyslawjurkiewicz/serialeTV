import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {JwPaginationComponent} from 'jw-angular-pagination';
import {SeriesService} from './services/series.service';
import {SeriesEffect} from './effects/series.effect';
import {reducers} from './reducers/index';
import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {cardComponent} from './components/card/card.component';
import {TruncatePipe} from "./params/truncate.pipe";
import { BarRatingModule } from "ngx-bar-rating";
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        JwPaginationComponent,
        cardComponent,
        TruncatePipe,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([SeriesEffect]),
        BarRatingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [SeriesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
