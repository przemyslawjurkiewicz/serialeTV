import {Component} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Store} from '@ngrx/store';

import {SeriesService} from './services/series.service';
import {Series} from './models/series.model';
import * as fromApp from './reducers/series.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
   series$: Observable<Series[]>;
  constructor(private productService: SeriesService,
              private store: Store<fromApp.SeriesState>
              ) {
  }
}
