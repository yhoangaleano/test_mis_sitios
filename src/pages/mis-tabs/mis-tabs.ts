import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InicioPage } from "../inicio/inicio";
import { ListadoPage } from "../listado/listado";
import { InformacionPage } from "../informacion/informacion";

@Component({
  selector: 'page-mis-tabs',
  templateUrl: 'mis-tabs.html'
})
export class MisTabsPage {

  inicioRoot = InicioPage;
  listadoRoot = ListadoPage;
  informacionRoot = InformacionPage;


  constructor(public navCtrl: NavController) {}

}
