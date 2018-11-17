import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkDataService } from '../park-data.service';
import { Park } from '../park';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage implements OnInit {
  public parkData: Array<Park>;
  private _parkData: Array<Park>;
  searchQuery = '';

  constructor(private _parkDataService: ParkDataService,
    private router: Router) { }

  ngOnInit() {
    this._parkDataService.load().subscribe((data) => {
      this.parkData = data;
      this._parkData = data;
    });
  }

  goParkDetails(theParkData) {
    this.router.navigateByUrl(`tabs/(parks:detail/${theParkData.id})`);
  }

  getParks(event) {
    // Reset items back to all of the parks this.parkData = this._parkData;
    // set queryString to the value of the searchbar
    let queryString = event.target.value;
    if (queryString !== undefined) {
      // if the value is an empty string don't filter the items
      if (queryString.trim() === '') {
        return;
      }
      queryString = queryString.toLowerCase();
      this.parkData = this.parkData.filter(park => {
        if (park.name.toLowerCase().indexOf(queryString) > -1) {
          return true;
        }
      });
    }
  }

  resetList(event) {
    // Reset items back to all of the items
    this.parkData = this._parkData;
  }

  customHeaderFn(record, recordIndex, records) {
    if ( recordIndex > 0) {
  if ( record.name.charAt(0) !== records[recordIndex - 1].name.charAt(0)) { return record.name.charAt(0);
      } else {
        return null;
  }
  } else {
      return record.name.charAt(0);
    }
  }
}
