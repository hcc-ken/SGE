import { Component, OnInit } from '@angular/core';
import {IonHeader, IonTitle, IonToolbar} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
    imports: [
        IonHeader,
        IonTitle,
        IonToolbar
    ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
