import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonMenuToggle} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonButton, MenuComponent, IonMenuToggle]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
