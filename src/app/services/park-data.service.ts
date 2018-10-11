import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Park } from './../park';

@Injectable({
  providedIn: 'root'
})
export class ParkDataService {
  private _dataURL = 'assets/data/data.json';
  private _parkData: Array<Park>;

  constructor(private http: HttpClient) { }

  load(): Observable<any> {
    if (this._parkData !== undefined && this._parkData.length !== 0) {
      return of(this._parkData);
    }

    return this.http.get<Park[]>(this._dataURL).pipe(
      // map(data => this._parkData = data)

      map(data => {
        data.forEach(park => {
          park.image = 'assets/img/thumbs/' + park.image;
        });
        return data;
      }),
      map(data => this._parkData = data)
    );
  }
}
