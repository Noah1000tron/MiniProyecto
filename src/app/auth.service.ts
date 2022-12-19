import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url:string="http://localhost:3000";
  status:boolean=false;
  idUser:string| null;
  login:string| null;
  name:string| null;
  lastname:string| null;
  cellphone:string| null;
  rol:string| null;
  constructor(private http2: HttpClient) { 
        this.idUser=localStorage.getItem("idUser");
        this.name=localStorage.getItem("name");
        this.lastname=localStorage.getItem("lastname");
        this.login=localStorage.getItem("contact");
        this.cellphone=localStorage.getItem("cellphone");
        this.rol=localStorage.getItem("rol");
  }

  autenticarUsuario(body:object):Observable<object> {
    const url = `${ this.base_url }/users/auth`;
    return this.http2.post( url,body);
  }

  registrarUsuario(body:object):Observable<object> {
    const url = `${ this.base_url }/users/create`;
    return this.http2.post( url,body);
  }
  actualizarestado(){
        this.idUser=localStorage.getItem("idUser");
        this.name=localStorage.getItem("name");
        this.lastname=localStorage.getItem("lastname");
        this.login=localStorage.getItem("contact");
        this.cellphone=localStorage.getItem("cellphone");
        this.rol=localStorage.getItem("rol");
  }
  cambiarstatus(dato:boolean){
    this.status=dato;
  }
  cerrarSesion(){
    localStorage.removeItem("name");
    localStorage.removeItem("lastname");
    localStorage.removeItem("contact");
    localStorage.removeItem("cellphone");
    localStorage.removeItem("rol");
    localStorage.removeItem("idUser");
  }
}
