import {  Component,EventEmitter,Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    if(!localStorage.getItem("dato")){
      localStorage.setItem("dato","1");
    }
  }
  
  title = 'MiniProyecto';
}
