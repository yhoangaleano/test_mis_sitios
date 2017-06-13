import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { ModalSitioNuevoPage } from './../modal-sitio-nuevo/modal-sitio-nuevo';

import { Geolocation } from '@ionic-native/geolocation';

declare var google : any;

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  map : any;
  coords : any = { lat: 0, lng: 0 }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private platform: Platform,
    private modalCtrl : ModalController) {

    platform.ready().then(() => {
      
        this.obtenerPosicion();

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  public obtenerPosicion() : any{
      
      this.geolocation.getCurrentPosition().then(res=> {

        this.coords.lat = res.coords.latitude;
        this.coords.lng = res.coords.longitude;

        this.cargarMapa();

      }).catch(error => {

          console.log(error);

      })

  }

  public cargarMapa(){

    let mapaContenedor = document.getElementById("mapa");

    this.map = new google.maps.Map(mapaContenedor, {
      center: this.coords,
      zoom: 15
    });

    let infoWindow = new google.maps.InfoWindow();

    let marker = new google.maps.Marker({
      position: this.coords,
      map: this.map,
      title: "!Hola estas aquí!"
    });

    google.maps.event.addListener(marker, "click", function(e){
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(this.map, marker);
    });

  }

  agregarSitio(){
    
    let miModal = this.modalCtrl.create(ModalSitioNuevoPage, this.coords);
    miModal.present();

  }

}
