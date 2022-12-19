import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() {
    if(localStorage.getItem("dato")=="0"){
      localStorage.setItem("dato","1");
      window.location.reload();
    }
   }

  ngOnInit(): void {
  }

}
