import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import {PopupService} from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  geoData = '/assets/data/usa-capitals.geojson';

  constructor(private httpClient: HttpClient,
              private popupService: PopupService) { }

  getUsaData(map: L.map): any{
    this.httpClient.get(this.geoData).subscribe(
      (data: any) => {
        for (const c of data.features) {
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon]);
          marker.bindPopup(this.popupService.showPopup(c.properties));
          marker.addTo(map);
        }
      }
    );
  }
 }
