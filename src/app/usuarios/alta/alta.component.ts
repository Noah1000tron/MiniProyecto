import { Component, OnInit } from '@angular/core';
import { AbcService } from 'src/app/abc.service';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  id?: string;
  name?: string;
  lastname?: string;
  email?: string;
  tel?: string;

  constructor(private abcService: AbcService) {}

  ngOnInit(): void {}

  insertar(): void {
    let body = {
      idUser: this.id,
      name: this.name,
      lastname: this.lastname,
      contact: this.email,
       cellphone    : this.tel
    };
    this.abcService
      .alta('http://localhost:3000/user', body)
      .then((data) => {
        
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  limpiar(): void {
    this.id = '';
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.tel = '';
  }

}
