import {Component, input, OnInit} from '@angular/core';
import {IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/angular";
import {addIcons} from "ionicons";
import {addCircle, car} from "ionicons/icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon
  ],
})
export class HeaderComponent  implements OnInit {
  icono = input.required(); // input.required() pide que le des un input obligatoriamente
  nombre = input.required();
  constructor() {
    addIcons({car, addCircle})
  }

  ngOnInit() {}

}
