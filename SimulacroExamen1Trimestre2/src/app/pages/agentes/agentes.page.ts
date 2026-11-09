import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {Component, inject, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonButton, IonButtons, IonCard,
  IonContent, IonFooter,
  IonHeader, IonIcon,
  IonItem, IonItemOption, IonItemOptions,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

import type {DataAgents} from "../../models/valorant.models";
import {AgentsService} from "../../services/agents.service";
import {addIcons} from "ionicons";
import {home, planet} from "ionicons/icons";

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.page.html',
  styleUrls: ['./agentes.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonItem, IonList, IonLabel, IonModal, IonCard, IonFooter, IonButtons, IonButton, IonItemOptions, IonItemOption, IonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgentesPage implements OnInit {
  private readonly agentsService: AgentsService = inject(AgentsService);
  dataAgentMaterials= signal<DataAgents[]>([]);
  constructor() {
    addIcons({home, planet})
  }

  ngOnInit() {
    this.loadData()
  }

  private loadData() {
  this.agentsService.getAgentMaterials().subscribe(
    {
      next: result => {
        this.dataAgentMaterials.set(result.data);
      },
      error: error => {
        console.log(error);
      }
    }
  );
  }

  protected onWillDismiss($event: any) {

  }

}
