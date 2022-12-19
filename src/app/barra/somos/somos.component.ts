import { Component, OnInit } from '@angular/core';
import { Map, map, tileLayer } from 'leaflet';


@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.css'],

})


export class SomosComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   const map= new Map('map').setView([51.505, -0.09], 13);
   tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  }

}
