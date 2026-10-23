import { Component, OnInit } from '@angular/core';
import {IonButton, IonContent, IonHeader, IonMenu, IonMenuToggle, IonTitle, IonToolbar} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonContent,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    RouterLink,
    IonMenuToggle
  ],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
