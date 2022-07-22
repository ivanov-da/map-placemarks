import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {YaReadyEvent} from "angular8-yandex-maps";

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent implements OnInit {
  public placemarkProperties: ymaps.IPlacemarkProperties = {
    balloonContentHeader: 'The placemark balloon',
    balloonContentBody: 'Content of the <em>placemark</em> balloon',
    hintContent: 'The placemark hint',
  };

  constructor() { }

  ngOnInit(): void {
  }
}
