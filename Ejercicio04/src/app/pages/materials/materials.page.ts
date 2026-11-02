import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {LoadDataZeldaComponent} from "../../components/load-data-zelda/load-data-zelda.component";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LoadDataZeldaComponent],
})
export class MaterialsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
