import {AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable, Subscriber} from "rxjs";
import * as L from 'leaflet';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements AfterViewInit, OnChanges {
  address: any;
  map: any;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
    console.log('address' , this.address)
  }

  public ngOnChanges(changes: SimpleChanges) {

  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {

    const map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 50,
      attribution: '© OpenStreetMap'
    }).addTo(map);

   const markerIcon = L.icon({
      iconUrl: '../../../../assets/icon/marker.png',
      iconSize:     [25, 25], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
    });
    const marker = L.marker([this.address.lat, this.address.lng] , {icon: markerIcon}).addTo(map);
  }

}
