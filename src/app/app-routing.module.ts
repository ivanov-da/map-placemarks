import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapPageComponent} from "./map/components/map-page/map-page.component";

const routes: Routes = [
  {
    path: '', component: MapPageComponent, title: 'Средиземье'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
