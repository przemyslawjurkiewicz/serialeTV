import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {select, Store} from '@ngrx/store';

import {SeriesService} from '../../services/series.service';
import * as seriesActions from '../../actions/series.actions';
import {Series} from '../../models/series.model';
import * as fromApp from '../../reducers/series.reducer';
import * as fromSeries from '../../reducers/index';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    series$: Observable<Series[]>;
    pageOfItems: Array<any>;
    items: Array<any>;

    constructor(private productService: SeriesService,
                private store: Store<fromApp.SeriesState>,
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new seriesActions.Load());
        this.series$ = this.store.pipe(select(fromSeries.getSeries));
        this.series$.subscribe(data => {
            this.items = data;
            this.items.sort((a, b) => a.name.localeCompare(b.name));
        });
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
}
