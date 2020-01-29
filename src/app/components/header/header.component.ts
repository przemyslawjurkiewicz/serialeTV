import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers/series.reducer';
import * as Actions from '../../actions/series.actions';
import {ISubscription} from "rxjs-compat/Subscription";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    searchField: FormControl;
    private subscription: ISubscription;

    constructor(private store: Store<fromRoot.SeriesState>) {
    }

    ngOnInit() {
        this.searchField = new FormControl();
        this.subscription = this.searchField.valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged()
            )
            .subscribe(term => {
                (!this.searchField.value) ? this.store.dispatch(new Actions.Load()) :
                    this.store['loaded'] = true;
                this.store['series'] = [];
                this.store.dispatch(new Actions.Search(this.searchField.value))
            });
        console.log(this.searchField.value)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}


