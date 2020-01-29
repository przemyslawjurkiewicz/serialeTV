import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSeries from '../reducers/series.reducer';

export interface State {
    seriesFeature: fromSeries.SeriesState;
}

export const reducers: ActionReducerMap<State> = {
    seriesFeature: fromSeries.SeriesReducer,
};

const getSeriesFeatureState = createFeatureSelector<fromSeries.SeriesState>('seriesFeature');

export const getSeries = createSelector(
    getSeriesFeatureState,
    state => {
        return state.series;
    }
);

export const getLoaded = createSelector(
    getSeriesFeatureState,
    state => {
        return state.loaded;
    }
);
