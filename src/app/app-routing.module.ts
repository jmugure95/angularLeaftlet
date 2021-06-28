import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureMapComponent } from './feature-map/feature-map.component';

const routes: Routes = [
  {path: '', component: FeatureMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
