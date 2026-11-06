import { CommonModule } from '@angular/common';
import type { OnInit} from '@angular/core';
import {Component, inject, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar} from '@ionic/angular';

import type {DataAgents} from "../../models/valorant.models";
import {AgentsService} from "../../services/agents.service";

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.page.html',
  styleUrls: ['./agentes.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonItem, IonList, IonLabel],
})
export class AgentesPage implements OnInit {
  private readonly agentsService: AgentsService = inject(AgentsService);
  dataAgentMaterials= signal<DataAgents[]>([]);
  constructor() {}

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
}
