import {Series} from '../models/series.model';
import {SeriesActions, SeriesActionTypes} from '../actions/series.actions';

export interface SeriesState {
    series: Series[];
    loaded: boolean;
    error: string;
}

const initialState: SeriesState = {
    series: [],
    loaded: false,
    error: ''
};

export function SeriesReducer(state = initialState, action: SeriesActions): SeriesState {
    switch (action.type) {
        case SeriesActionTypes.LoadSuccess:
            return {
                ...state,
                series: [...action.payload],
                loaded: true,
                error: ''
            };
        default:
            return state;
    }
}
