import { Component, Input } from '@angular/core';
import  {Series} from "../../models/series.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {
  @Input() item: Series;
  constructor() { }



}
