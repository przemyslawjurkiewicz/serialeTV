import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {Series} from '../models/series.model';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class SeriesService {
    private seriesUrl = 'http://api.tvmaze.com/';

    constructor(private http: HttpClient) {
    }

    getAllSeries(): Observable<Series[]> {
        return this.http.get<Series[]>(`${this.seriesUrl}shows`)
            .pipe(
                map((data) => {
                    return data;
                }),
                //   tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    getSeriesSearch(phrase: string): Observable<Series[]> {
        return this.http.get<Series[]>(`${this.seriesUrl}search/shows?q=${phrase}`)
            .pipe(
                map((data) => {
                    return data.map(data => data['show'])
                }),
                //  tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
