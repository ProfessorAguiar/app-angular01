import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-busca-poke-api',
  templateUrl: './busca-poke-api.component.html',
  styleUrls: ['./busca-poke-api.component.css']
})
export class BuscaPokeApiComponent {
  pokeName!:string
  pokePeso!:string
  pokeAlt!:string
  pokeImg!:string
  search(value: string){
    const options={
      method: 'GET',
      url:`https://pokeapi.co/api/v2/pokemon/${value}`,
      headers: {'Content-Type':'application/json'}
    }
    axios.request(options).then((response)=>{
      console.log(response.data)
      this.pokeName=(response.data.name)
      this.pokePeso=(`Peso: ${response.data.weight}`)
      this.pokeAlt=(`Altura: ${response.data.height}`)
      this.pokeImg=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${value}.gif`
    }).catch((error)=>{
      console.log(error)
    })
  }
}
