import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-busca-poke-api',
  templateUrl: './busca-poke-api.component.html',
  styleUrls: ['./busca-poke-api.component.css']
})
export class BuscaPokeApiComponent {
  search(value: string){
    const options={
      method: 'GET',
      url:`https://pokeapi.co/api/v2/pokemon/${value}`,
      headers: {'Content-Type':'application/json'}
    }
    axios.request(options).then((response)=>{
      console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
}
