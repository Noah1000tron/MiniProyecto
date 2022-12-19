import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bandera?: boolean;
  constructor(private spotify: SpotifyService) { }
  artistas: any[] = [];
  buscar(termino: string){
  console.log("buscar");
  this.bandera = true;
  this.spotify.getArtistas(termino)
  .subscribe ( (data:any) => {
  this.artistas = data;
  this.bandera=false;
  } );
  }


  ngOnInit(): void {
  }

}
