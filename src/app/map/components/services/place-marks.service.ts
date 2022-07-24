import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IPin} from "../../interfaces/pin";
import {LocalService} from "./local.service";
import {StorageEnum} from "../../interfaces/storage";
import {INITIAL_PINS} from "../initial-pins";

@Injectable({
  providedIn: 'root'
})
export class PlaceMarksService {

  private _pins$: BehaviorSubject<IPin[]> = new BehaviorSubject<IPin[]>([]);
  public pins$: Observable<IPin[]> = this._pins$.asObservable();

  constructor(
    private storage: LocalService
  ) {
  }

  public addPin(pin: IPin): void {
    const pins: IPin[] = this.getPins();
    pin.id = this.getNewId(pins);
    pins.push(pin);
    this._pins$.next(pins);
    this.storage.saveData(StorageEnum.Pins, JSON.stringify(pins));
  }

  public removePin(id: number): void {
    console.log('removing pin:', id)
    const pins: IPin[] = this.getPins().filter( (pin) => pin.id !== id);
    this._pins$.next(pins);
    this.storage.saveData(StorageEnum.Pins, JSON.stringify(pins));
  }

  public initPins(): void {
    const pins = this.storage.getData(StorageEnum.Pins);

    if (pins) {
      this._pins$.next(pins);
    } else {
      this._pins$.next(INITIAL_PINS);
    }
  }

  private getPins(): IPin[] {
    return JSON.parse(JSON.stringify(this._pins$.value));
  }

  private getNewId(pins: IPin[]): number {
    if (pins.length === 0) {
      return 1;
    }
    let maxId = pins[0].id ?? 1;
    pins.forEach((pin) => {
      if (pin.id && pin?.id > maxId) {
        maxId = pin.id;
      }
    });
    return maxId + 1;
  }
}
