import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkDataService } from '../park-data.service';
import { Park } from '../park';

@Component({
  selector: 'app-park-details',
  templateUrl: './park-details.page.html',
  styleUrls: ['./park-details.page.scss'],
})
export class ParkDetailsPage implements OnInit {
  parkInfo: Park;

  constructor(
    private route: ActivatedRoute,
    private _parkDataService: ParkDataService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const parkID = +this.route.snapshot.paramMap.get('parkID');
    this._parkDataService.load().subscribe((data) => {
      this.parkInfo = data.filter(park => park.id === parkID)[0];
      console.log(this.parkInfo);
    });
  }
}
