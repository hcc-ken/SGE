import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {LoadDataZeldaComponent} from "../../components/load-data-zelda/load-data-zelda.component";

@Component({
  selector: 'app-paw',
  templateUrl: './paw.page.html',
  styleUrls: ['./paw.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LoadDataZeldaComponent],
})
export class PawPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
