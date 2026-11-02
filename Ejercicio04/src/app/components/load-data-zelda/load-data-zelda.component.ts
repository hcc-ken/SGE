import {input, OnInit, signal} from '@angular/core';
import {Component, inject} from '@angular/core';

import {ZeldaService} from "../../services/zelda-service";
import {dataZelda} from "../../common/models/zelda.model";
import {
  IonAvatar, IonButton,
  IonButtons, IonCard, IonCardContent, IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal, IonTitle,
  IonToolbar
} from "@ionic/angular";
import {addIcons} from "ionicons";
import {heart, heartHalf, heartOutline} from "ionicons/icons";
import {HeartRecoveredComponent} from "../heart-recovered/heart-recovered.component";
import {AttDefComponent} from "../att-def/att-def.component";

@Component({
  selector: 'app-load-data-zelda',
  templateUrl: './load-data-zelda.component.html',
  styleUrls: ['./load-data-zelda.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonIcon,
    HeartRecoveredComponent,
    AttDefComponent,
    IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent
  ],
})
export class LoadDataZeldaComponent implements OnInit {
  category = input.required<string>();
  heartOn = input.required<boolean>();
  private readonly zeldaService: ZeldaService = inject(ZeldaService);
  dataZeldaItems = signal<dataZelda[]>([]);

  constructor() {
    addIcons({heart, heartHalf, heartOutline});
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.zeldaService.getDataZelda(this.category()).subscribe(
      {
        next: res => {
          this.dataZeldaItems.set(res.data);
        },
        error: err => {
          console.error(err);
        }
      }
    );
  }

  protected readonly Math = Math;
  protected readonly Array = Array;
}
