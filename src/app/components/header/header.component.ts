import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/series.reducer';
import * as Actions from '../../actions/series.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchField: FormControl;
  searches: string='';
  constructor(private store: Store<fromRoot.SeriesState>) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .pipe(
            debounceTime(400),
            distinctUntilChanged()
        )
        .subscribe(term => {
          this.store.dispatch(new Actions.Search(this.searchField.value))
        });
    console.log(this.searches)
     }


}
