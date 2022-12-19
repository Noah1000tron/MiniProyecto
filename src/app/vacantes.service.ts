import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacantesService {
  private base_url:string="http://localhost:3000";
  constructor(private http2: HttpClient) { }

  cargarVacantes():Observable<object> {
    const url = `${ this.base_url }/vacantes`;
    return this.http2.get( url );
  }

  cargarVacantesPuesto(puesto:string):Observable<object> {
    const url = `${ this.base_url }/vacantes/puesto/${puesto}`;
    return this.http2.get( url );
  }

  cargarVacantesCompania(compania:string):Observable<object> {
    const url = `${ this.base_url }/vacantes/compania/${compania}`;
    return this.http2.get( url );
  }

  crearVacantes(body:any):Observable<object> {
    const url = `${ this.base_url }/vacantes/create`;
    return this.http2.post( url ,body);
  }

  actualizarVacantes(body:any):Observable<object> {
    const url = `${ this.base_url }/vacantes/update`;
    return this.http2.put( url ,body);
  }

  eliminarVacantes(id:string):Observable<object> {
    const url = `${ this.base_url }/vacantes/drop/${id}`;
    return this.http2.delete( url );
  }

}
