import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import * as Data from '../../MockData.json';
import {IResult} from '../interfaces/IResult';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() {}

  /**
   * Async function Get Data from Source JSON
   * @return Observable<any>
   */
  public getData(): Observable<IResult[]> {
    const data: [] = JSON.parse(JSON.stringify(Data)).default;
    return of(data);
  }
}
