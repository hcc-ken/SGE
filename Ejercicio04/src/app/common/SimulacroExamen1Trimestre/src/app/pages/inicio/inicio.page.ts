import {Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader,
  IonImg, IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonImg, IonCardContent, IonCardHeader, IonCardTitle, IonLabel, IonButton],
})
export class InicioPage implements OnInit {
  slides: { img: string; desc: string; color: string }[] = [
    {img: 'assets/images/logo.avif',
    desc: 'En este examen utilizaremos componented de Ionic',
    color: 'secondary'},


    {img: 'assets/images/link.jpg',
    desc: 'Pero trabajaremos con la API de Zelda',
    color: 'primary'},

    {img: 'assets/images/approved.png',
    desc: 'Para lograr el ansiado aprobado',
    color: 'success'}
  ];

  constructor() {}

  ngOnInit() {}
}
