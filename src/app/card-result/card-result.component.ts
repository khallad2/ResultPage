import {Component, Input, OnInit} from '@angular/core';
import {IResult} from '../interfaces/IResult';
import {IFilters} from '../interfaces/IFilters';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.scss']
})
export class CardResultComponent implements OnInit {
  @Input() tariffData: IResult;
  @Input() public isFiltered: IFilters;
  @Input() public tariffIndex: number;

  constructor() { }

  ngOnInit() {}

}
