import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './components/map-page/map-page.component';
import {AngularYandexMapsModule} from "angular8-yandex-maps";
import {TuiLetModule} from "@taiga-ui/cdk";
import { MapFormComponent } from './components/map-form/map-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule, TuiInputNumberModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";



@NgModule({
  declarations: [
    MapPageComponent,
    MapFormComponent
  ],
  imports: [
    CommonModule,
    AngularYandexMapsModule,
    TuiLetModule,
    ReactiveFormsModule,
    TuiInputNumberModule,
    TuiInputModule,
    TuiButtonModule
  ],
  exports: [MapPageComponent]
})
export class MapModule { }
