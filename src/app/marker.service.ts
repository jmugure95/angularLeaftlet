import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  geoData = '/assets/data/usa-capitals.geojson';

  constructor(private httpClient: HttpClient) { }

  getUsaData(map: L.map): any{
    this.httpClient.get(this.geoData).subscribe(
      (data: any) => {
        for (const c of data.features) {
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon]);
          marker.addTo(map);
        }
      }
    );
  }
 }
