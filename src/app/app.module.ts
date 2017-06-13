import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

import { MisTabsPage } from './../pages/mis-tabs/mis-tabs';
import { InicioPage } from './../pages/inicio/inicio';
import { ListadoPage } from './../pages/listado/listado';
import { InformacionPage } from './../pages/informacion/informacion';
import { ModalSitioNuevoPage } from './../pages/modal-sitio-nuevo/modal-sitio-nuevo';

@NgModule({
  declarations: [
    MyApp,
    MisTabsPage,
    InicioPage,
    ListadoPage,
    InformacionPage,
    ModalSitioNuevoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisTabsPage,
    InicioPage,
    ListadoPage,
    InformacionPage,
    ModalSitioNuevoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
