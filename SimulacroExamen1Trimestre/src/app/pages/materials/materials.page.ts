import { CommonModule } from '@angular/common';
import type {OnInit} from '@angular/core';
// eslint-disable-next-line import-x/no-duplicates
import {inject, input, signal} from '@angular/core';
// eslint-disable-next-line import-x/no-duplicates
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IonAvatar,
    IonButton, IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem, IonLabel,
    IonList, IonMenuToggle, IonModal, IonText,
    IonTitle,
    IonToolbar
} from '@ionic/angular';
import {addIcons} from "ionicons";
import {power} from "ionicons/icons";

import {MenuComponent} from "../../components/menu/menu.component";
import type {DataZelda} from "../../models/zelda.models";
import {ZeldaService} from "../../services/zelda.service";


@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonButton, IonIcon, IonList, IonItem, IonLabel, IonMenuToggle, MenuComponent, IonModal, IonButtons, IonText],
})
export class MaterialsPage implements OnInit {
  category = input.required<string>();
  private readonly zeldaService: ZeldaService = inject(ZeldaService);
  dataZeldaMaterials = signal<DataZelda[]>([]);
  protected readonly randomNumber = signal<number>(0);

  constructor() {
      addIcons({power})
  }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData() {
    this.zeldaService.getMaterials().subscribe(
        {
          next: res => {
            this.dataZeldaMaterials.set(res.data);
          },
          error: err => {
            console.error(err);
          }
        }
    );
  }

    protected generateRandom() {
        this.randomNumber.set(Math.floor(Math.random() * this.dataZeldaMaterials().length));
    }

    protected onWillDismiss($event: any) {
        
    }
}

