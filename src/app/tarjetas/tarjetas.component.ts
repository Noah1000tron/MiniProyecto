import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  verArtista( item: any ){
    console.log("metodo verArtista de componente tarjetas");
    let artistaId;
    if(item.type === 'artist'){
    artistaId = item.id;
    }
    else{
    artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist',artistaId]);
    }
    showCard(item:any){
      return item && item.images && item.images.length > 0
      }
}
