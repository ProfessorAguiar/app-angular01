import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    BarraNavegacaoComponent,
    ConteudoComponent,
    FooterComponent,
    CardComponent
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
