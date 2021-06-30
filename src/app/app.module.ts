import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureMapComponent } from './feature-map/feature-map.component';
import { MarkerService } from './marker.service';
import {PopupService} from './popup.service';
import {ShapeService} from './shape.service';


@NgModule({
  declarations: [
    AppComponent,
    FeatureMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MarkerService, PopupService, ShapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
