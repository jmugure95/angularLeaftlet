# Angular Leaflet

###### This project demonstartes how to project geojson data(points and polygons) on a leaflet map.
###### We import leaflet to angular, we display state data using markers and create shadows on the markers
###### Project the state polygons onto the map

#### 1. Installing Leaflet
```
npm install leaflet@1.7.1
```
#### 2. Import Leaflet
```
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
```

#### 2. Add leaflet.css to angular.json
```
 "styles": [
    "./node_modules/leaflet/dist/leaflet.css",
    "src/styles.css"
 ],
 
```
graph LR;
    A[Write code] --> B{Dode it work?}
    B -- Yes --> C[Great!]
    B -- No --> D[Google]
    D --> A
```

Reference link: [DigitalOcean][1]

[1]: https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet

```

### Set automatic git username and password
````
git config --global user.name "username"
fit config --global user.password "my token"

git config --global credential.helper cache
then run 
git pull

you have to love this 
