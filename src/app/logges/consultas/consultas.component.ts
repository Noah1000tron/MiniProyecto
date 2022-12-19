import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/registro.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  id?:string;
  nombrecomp?:string;
  fecha?:string;
  giro?:string;
  puesto?:string;
  experiencia?:string;
  modalidad?:string;
  sueldo?:string;
  
  remoto='';
  presencial='';
  hibrido='';
  
  

  constructor(private registro:RegistroService) { }
     
  ngOnInit(): void {
  }
  registro2():void{
    let body={
    id: this.id,
    nombrecomp: this.nombrecomp,
    fecha: this.fecha,
    giro: this.giro,
    puesto: this.puesto,
    experiencia: this.experiencia,
    modalidad: this.modalidad,
    sueldo: this.sueldo
  };
  this.registro.alta('http://localhost:3000/user',body)
  .then((data) => {
    console.log(data);
    })
    .catch((err) => {
    console.log(err);
    });
  }

}
