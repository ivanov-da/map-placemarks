import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {PlaceMarksService} from "../services/place-marks.service";

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapListComponent implements OnInit {

  constructor(
    public placeMarksService: PlaceMarksService
  ) { }

  ngOnInit(): void {
  }

  public removePin(id: number): void {
    this.placeMarksService.removePin(id);
  }
}
