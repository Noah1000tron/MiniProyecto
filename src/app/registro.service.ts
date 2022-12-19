import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private httpClient: HttpClient) { }
  alta(url:string,body:any){
    return this.httpClient.post(url, body).toPromise();
    }
}
