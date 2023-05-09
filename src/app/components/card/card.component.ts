import { Component } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  titulo: string = 'Estudar Angular JS'
  search(value: string) {
    const options = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/5',
      headers: { 'Content-Type': 'application/json' },
    };
    axios.request(options).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error)
    })
  }
}