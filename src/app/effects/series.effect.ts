import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Action, Store, select} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromSeries from '../reducers/index';
import {SeriesService} from '../services/series.service';
import * as seriesAction from '../actions/series.actions';
import {of} from 'rxjs/internal/observable/of';
import {empty} from 'rxjs/internal/observable/empty';

@Injectable()
export class SeriesEffect {
    constructor(
        private SeriesService: SeriesService,
        private action$: Actions,
        private store: Store<any>
    ) {
    }

    @Effect()
    loadSeries$: Observable<Action> = this.action$.pipe(
        ofType(seriesAction.SeriesActionTypes.Load),
        withLatestFrom(this.store.pipe(select(fromSeries.getLoaded))),
        switchMap(([, loaded]) => {
            if (loaded) {
                return empty();
            }
            console.log('LOADING DATA', loaded);
            return this.SeriesService.getAllSeries().pipe(
                map(series => {
                    return new seriesAction.LoadSuccess(series);
                }),
                catchError(err => of(new seriesAction.LoadFail(err)))
            );
        })
    );
}


