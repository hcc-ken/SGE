import { Component, OnInit } from '@angular/core';
import {IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonText} from "@ionic/angular";
import {addIcons} from "ionicons";
import {cog, settings} from "ionicons/icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonMenu,
    IonLabel,
    IonIcon,
    IonItem,
    IonMenuToggle,
    IonList,
    IonText,
    IonContent
  ],
})
export class MenuComponent implements OnInit {
  constructor() {
    addIcons({cog, settings})
  }

  ngOnInit() {}
}
