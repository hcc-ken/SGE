import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonButton, RouterLink]
})
export class PlusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
