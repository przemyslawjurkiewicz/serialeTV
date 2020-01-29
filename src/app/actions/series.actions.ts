import {Action} from '@ngrx/store';
import {Series} from '../models/series.model';

export enum SeriesActionTypes {
    Load = '[Series] Load',
    LoadSuccess = '[Series] Load Success',
    LoadFail = '[Series] Load Fail',
    Search = '[Series] Search'
}

export class Load implements Action {
    readonly type = SeriesActionTypes.Load;

    constructor() {
    }
}

export class Search implements Action {
    readonly type = SeriesActionTypes.Search;

    constructor(public payload: string) {
    }
}

export class LoadSuccess implements Action {
    readonly type = SeriesActionTypes.LoadSuccess;

    constructor(public payload: Series[]) {
    }
}

export class LoadFail implements Action {
    readonly type = SeriesActionTypes.LoadFail;

    constructor(public payload: string) {
    }
}

// Union the valid types
export type SeriesActions = Load
    | LoadSuccess
    | LoadFail
    | Search;

