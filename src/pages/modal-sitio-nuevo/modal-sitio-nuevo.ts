import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

declare var google : any;

@Component({
  selector: 'page-modal-sitio-nuevo',
  templateUrl: 'modal-sitio-nuevo.html',
})
export class ModalSitioNuevoPage {

  coords: any = { lat: 0, lng: 0 };
  direccion: string = "";
  descripcion: string = "";
  foto: any = "";

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public viewCtrl: ViewController) {
  
}

  ionViewDidLoad() {
    this.coords.lat = this.navParams.get("lat");
    this.coords.lng = this.navParams.get("lng");

    this.obtenerDireccion(this.coords).then((results)=>{
      this.direccion = results[0]["formatted_address"];
    }, (error) => {
      console.log(error);
    })
  }

  public cerrarModal(){
    this.viewCtrl.dismiss();
  }

  public obtenerDireccion(coords): any{
    var geocoder = new google.maps.Geocoder();

    return new Promise(function(resolve, reject){
      geocoder.geocode({'location': coords}, function(results, status){

        if(status == google.maps.GeocoderStatus.OK){
            
            resolve(results);

        }else{
          
            reject(status);

        }

      });
    });
  }

}
