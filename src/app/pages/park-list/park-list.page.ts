import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParkDataService } from '../../services/park-data.service';
import { Park } from '../../park';
import { delay } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

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
    public loadingController: LoadingController,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log('delay start');
    // this.presentLoading();
    this._parkDataService.load().pipe(delay(50)).subscribe((data) => {
      this.parkData = data;
      this._parkData = data;
       // this.loading.dismiss();
      // console.log('delay end');
    });
  }

  // async presentLoading() {
  //    this.loading = await this.loadingController.create({
  //     content: 'Loading Data...'
  //   });
  //   return await this.loading.present();
  // }

  goParkDetails(theParkData) {
    this.router.navigateByUrl(`tabs/(parks:detail/${theParkData.id})`);
  }

  // Search
  getParks(event) {
    // Reset items back to all of the parks
    this.parkData = this._parkData;

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

  // Header
  customHeaderFn(record, recordIndex, records) {
    if (recordIndex > 0) {
      if (record.name.charAt(0) !== records[recordIndex - 1].name.charAt(0)) {
        return record.name.charAt(0);
      } else {
        return null;
      }
    } else {
      return record.name.charAt(0);
    }
  }

}
