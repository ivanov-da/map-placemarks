import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PlaceMarksService} from "../services/place-marks.service";
import {IPin} from "../../interfaces/pin";

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

  test() {
    console.log(1)
  }
}
