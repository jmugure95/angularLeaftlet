import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-feature-map',
  templateUrl: './feature-map.component.html',
  styleUrls: ['./feature-map.component.css']
})
export class FeatureMapComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [0.023, 36.87],
      zoom: 3
    });

    const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    osmTiles.addTo(this.map);
  }
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
