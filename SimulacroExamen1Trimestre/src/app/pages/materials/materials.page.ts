import { CommonModule } from '@angular/common';
import type { OnInit} from '@angular/core';
// eslint-disable-next-line import-x/no-duplicates
import {inject, input, signal} from '@angular/core';
// eslint-disable-next-line import-x/no-duplicates
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

import type {DataZelda} from "../../models/zelda.models";
import {ZeldaService} from "../../services/zelda.service";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class MaterialsPage implements OnInit {
  category = input.required<string>();
  private readonly zeldaService: ZeldaService = inject(ZeldaService);
  dataZeldaMaterials = signal<DataZelda[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }


  private loadData() {
    this.zeldaService.getMaterials(this.category()).subscribe(
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
}

