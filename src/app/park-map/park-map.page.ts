import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ParkDataService } from '../park-data.service';
import { Park } from '../park';

declare const google: any;

@Component({
  selector: 'app-park-map',
  templateUrl: './park-map.page.html',
  styleUrls: ['./park-map.page.scss'],
})

export class ParkMapPage implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: any;
  public parkData: Array<Park>;

  constructor(private _parkDataService: ParkDataService,
    private router: Router,
    private platform: Platform) { }

  ngOnInit() {
    this._parkDataService.load().subscribe((data) => {
      this.parkData = data;
      this.initializeMap();
    });
  }

  initializeMap() {
    this.platform.ready().then(() => {
      const mapProp = {
        center: new google.maps.LatLng(39.833, -98.583), mapTypeControl: false,
        streetViewControl: false,
        zoom: 3,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

      this.addMarkers();
    });
  }

  addMarkers() {
    const markerImage = 'assets/img/nps_arrowhead.png';
    for (const thePark of this.parkData) {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(thePark.lat, thePark.long),
        map: this.map,
        icon: markerImage
      });
      marker.setValues(thePark);
      marker.addListener('click', () => {
        this.markerClickHandler(marker);
      });
    }
  }

  // markerClickHandler(marker: google.maps.Marker) {
  markerClickHandler(marker: google.maps.Marker) {
    const theparkID: number = marker.get('id');
    this.router.navigateByUrl(`tabs/(map:detail/${theparkID})`);
  }
}
