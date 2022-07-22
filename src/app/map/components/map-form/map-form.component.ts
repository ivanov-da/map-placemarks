import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IPin} from "../../interfaces/pin";
import {PlaceMarksService} from "../services/place-marks.service";

@Component({
  selector: 'app-map-form',
  templateUrl: './map-form.component.html',
  styleUrls: ['./map-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapFormComponent implements OnInit {
  public pinForm: FormGroup;

  @Output() addPin: EventEmitter<IPin> = new EventEmitter<IPin>();

  constructor(
    private fb: FormBuilder,
  ) {
    this.pinForm = this.fb.group({
      long: [null, Validators.required],
      attitude: [null, Validators.required],
      header: ['', Validators.required],
      body: [''],
      hint: [''],
    });
  }

  ngOnInit(): void {
  }

  public OnAddPin():void {
    const pin: IPin = {
      id: 0,
      geometry: [this.pinForm.value.long, this.pinForm.value.attitude],
      header: this.pinForm.value.header,
      body: this.pinForm.value.body,
      hint: this.pinForm.value.hint,
    };
    this.addPin.emit(pin);
  }
}
