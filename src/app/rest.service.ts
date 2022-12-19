import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient){

  }
  //direccion del donde se va a guardar el archivo curriculum en binario
  sendPost(body:FormData):Observable<any>{
    return this.http.post(`http://localhost:3000/archivos`, body)
  }
  countCurriulum():Observable<any>{
    return this.http.get(`http://localhost:3000/curriculumCount`)
  }

  createCurriulum(body:any):Observable<any>{
    return this.http.post(`http://localhost:3000/curriculum/create`,body)
  }

  obtenerCurriulum():Observable<any>{
    return this.http.get(`http://localhost:3000/curriculum`)
  }

  obtenerCurriulumByUser(id:string|null):Observable<any>{
    return this.http.get(`http://localhost:3000/curriculumByUser/${id}`)
  }

  cancelarCurriulumByUser(id:string|null):Observable<any>{
    return this.http.delete(`http://localhost:3000/curriculumByUser/${id}`)
  }

  obtenerArchivo(nombre:string):Observable<any>{
    return this.http.get(`http://localhost:3000/archivo/${nombre}`,{responseType:'blob' as 'json'})
  }
}
