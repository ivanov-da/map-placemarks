import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PlaceMarksService} from "../services/place-marks.service";
import {IPin} from "../../interfaces/pin";
import {YaReadyEvent} from "angular8-yandex-maps";
import {YaEvent} from "angular8-yandex-maps/lib/models/ya-event";

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

  constructor(
    public placeMarksService: PlaceMarksService
  ) {
    this.placeMarksService.initPins();
  }

  ngOnInit(): void {

  }

  public addPin(pin: IPin): void {
    console.log('ADDED PIN', pin)
    this.placeMarksService.addPin(pin);
  }

  test(event: YaEvent<ymaps.Placemark>) {
    const { ymaps, target } = event;
    console.log(target)
    console.log(target.geometry?.getCoordinates())
  }

  public onMapReady(event: YaReadyEvent<ymaps.Map>): void {
    const { ymaps, target } = event;
    console.log(ymaps, target)
  }
}
