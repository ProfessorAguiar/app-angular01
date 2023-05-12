import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent {
  array=[]
  arrayNames:string[]=[]
  arrayImgs:string[]=[]
  arrayPesos:string[]=[]
  arrayAlts:string[]=[]
  teste:string='TesteCompConteudo'
  nome:string='pokename'

  ngOnInit() {
    const options={
      method: 'GET',
      url:`https://pokeapi.co/api/v2/pokemon/`,
      headers: {'Content-Type':'application/json'}
    }
    axios.request(options).then((response)=>{
      this.array=(response.data.results)
      console.log(response.data.results)
      for(let i=0;i<20;i++){
        this.arrayNames.push(response.data.results[i].name)
        const options={
          method: 'GET',
          url:response.data.results[i].url,
          headers: {'Content-Type':'application/json'}
        }
        axios.request(options).then((response)=>{
          console.log(response.data.sprites.front_default)
          this.arrayImgs.push(response.data.sprites.front_default)
          this.arrayAlts.push(response.data.height)
          this.arrayPesos.push(response.data.weight)
        })
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

}