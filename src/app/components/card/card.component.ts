import { Component, Input } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() nomePoke:string=''
  @Input() imgPoke:string=''
  @Input() altPoke:string=''
  @Input() pesoPoke:string=''
  
  
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