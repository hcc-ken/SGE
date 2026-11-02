import {Component, input, OnInit} from '@angular/core';
import {IonIcon} from "@ionic/angular";

@Component({
  selector: 'app-heart-recovered',
  templateUrl: './heart-recovered.component.html',
  styleUrls: ['./heart-recovered.component.scss'],
  imports: [
    IonIcon
  ],
})
export class HeartRecoveredComponent implements OnInit {
  heartsRecoveres = input.required<number | undefined>();
  constructor() {}

  ngOnInit() {}

  protected readonly Math = Math;
  protected readonly Array = Array;
}
