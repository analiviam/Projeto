import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './responsavel/cadastro/cadastro';
import { ListarAlunoComponent } from './listaraluno/listaraluno';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CadastroComponent, ListarAlunoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCXumi44yQxQ0xTOWB2PMVos7Hj7GDiJyo",
    authDomain: "secao-f3df4.firebaseapp.com",
    databaseURL: "https://secao-f3df4.firebaseio.com",
    projectId: "secao-f3df4",
    storageBucket: "secao-f3df4.appspot.com",
    messagingSenderId: "1005466053039",
    appId: "1:1005466053039:web:3778903b954dc0cb89a75a"
    })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
