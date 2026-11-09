import { CommonModule } from '@angular/common';
import type {OnInit} from '@angular/core';
// eslint-disable-next-line import-x/no-duplicates
import {inject, input, signal} from '@angular/core';
// eslint-disable-next-line import-x/no-duplicates
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    InfiniteScrollCustomEvent,
    IonAvatar,
    IonButton, IonButtons,
    IonContent,
    IonHeader,
    IonIcon, IonInfiniteScroll, IonInfiniteScrollContent,
    IonItem, IonLabel,
    IonList, IonMenuToggle, IonModal, IonText,
    IonTitle,
    IonToolbar
} from '@ionic/angular';
import {addIcons} from "ionicons";
import {power} from "ionicons/icons";

import {MenuComponent} from "../../components/menu/menu.component";
import type {APIZeldaResponse, DataZelda} from "../../models/zelda.models";
import {ZeldaService} from "../../services/zelda.service";
import {disabled} from "@angular/forms/signals";


@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonButton, IonIcon, IonList, IonItem, IonLabel, IonMenuToggle, MenuComponent, IonModal, IonButtons, IonText, IonInfiniteScroll, IonInfiniteScrollContent],
})
export class MaterialsPage implements OnInit {
  category = input.required<string>();
  private readonly zeldaService: ZeldaService = inject(ZeldaService);
  dataZeldaMaterials = signal<DataZelda[]>([]);
  protected readonly randomNumber = signal<number>(0);

  // Infinite Scroll
    // Aqui se guarda los materiales recibidos por la api
    private allMaterials = signal<DataZelda[]>([]);
    //Aqui la cantidad de materiales que se mostrara por carga
    private pageSize = 10;
    // Controlamos si quedan materiales por mostrar
    private hasMore: any;


  constructor() {
      addIcons({power})
  }

  ngOnInit(): void {
    this.loadData();
  }

    private loadData() {
        this.zeldaService.getMaterials().subscribe({
            next: res => {

                // Guardamos todos los materiales
                this.allMaterials.set(res.data);

                // Mostramos solamente los primeros 10
                this.dataZeldaMaterials.set(res.data.slice(0, this.pageSize));

                // Comprobamos si quedan más materiales
                this.hasMore.set(res.data.length > this.pageSize);
            },
            error: err => {
                console.error(err);
            }
        });
    }

    protected generateRandom() {
        this.randomNumber.set(Math.floor(Math.random() * this.dataZeldaMaterials().length));
    }

    protected onWillDismiss($event: any) {
        
    }

    protected loadMore(event: InfiniteScrollCustomEvent) {
        console.log('Cargando siguientes ...');
        setTimeout(() =>{
            if (this.allMaterials.length > 50) {
                event.target.complete();
                this.infiniteScroll.disabled = true;
                return;
            }
            const nuevoArr = Array(20);
            this.allMaterials.push( ...nuevoArr);
            event.target.complete();
        }, 1000 );
    }
}


