import {Component, Input} from '@angular/core';
import {Series} from "../../models/series.model";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class cardComponent {
    @Input() item: Series;

    constructor() {
    }


}
