import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IPin} from "../interfaces/pin";

@Injectable({
  providedIn: 'root'
})
export class PlaceMarksService {

  private _pins: BehaviorSubject<IPin[]> = new BehaviorSubject<IPin[]>([]);
  public pins: Observable<IPin[]> = this._pins.asObservable();

  public addPin(pin: IPin): void {
    const pins: IPin[] = this.getPins();
    pin.id = this.getNewId(pins);
    pins.push(pin);
    this._pins.next(pins);
  }

  public removePin(id: number): void {
    const pins: IPin[] = this.getPins();
    pins.filter( (pin) => pin.id !== id);
    this._pins.next(pins);
  }

  private getPins(): IPin[] {
    return JSON.parse(JSON.stringify(this._pins.value));
  }

  private getNewId(pins: IPin[]): number {
    let maxId = pins[0].id;
    pins.forEach((pin) => {
      if (pin.id > maxId) {
        maxId = pin.id;
      }
    });
    return maxId + 1;
  }
}
