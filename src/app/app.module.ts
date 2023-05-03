import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
