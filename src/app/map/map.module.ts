import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './components/map-page/map-page.component';
import {AngularYandexMapsModule} from "angular8-yandex-maps";



@NgModule({
  declarations: [
    MapPageComponent
  ],
  imports: [
    CommonModule,
    AngularYandexMapsModule
  ],
  exports: [MapPageComponent]
})
export class MapModule { }
