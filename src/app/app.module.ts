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
import {HttpClientModule} from '@angular/common/http';
import { BuscaPokeApiComponent } from './components/busca-poke-api/busca-poke-api.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    BarraNavegacaoComponent,
    ConteudoComponent,
    FooterComponent,
    CardComponent,
    BuscaPokeApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
