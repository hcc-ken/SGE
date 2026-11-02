import {Component, input, OnInit} from '@angular/core';
import {Properties} from "../../common/models/zelda.model";
import {IonIcon, IonText} from "@ionic/angular";
import {addIcons} from "ionicons";
import {flash, shield} from "ionicons/icons";

@Component({
  selector: 'app-att-def',
  templateUrl: './att-def.component.html',
  styleUrls: ['./att-def.component.scss'],
  imports: [
    IonIcon,
    IonText
  ],
})
export class AttDefComponent implements OnInit {
  properties = input.required<Properties | undefined>();
  constructor() {
    addIcons({flash, shield});
  }

  ngOnInit() {}
}
