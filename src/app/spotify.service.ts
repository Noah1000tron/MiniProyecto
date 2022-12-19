import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
      console.log("Spotify Service listo");
  }

  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({'Authorization':'Bearer BQBEyFHGnEcA5dWJZO9JV0MiNEDQ9dnZ6GNLnO3r25t4bSa_Om5pOACwR0tzEkU_JgscAYpdPQMOL2uILlqhSJJK0vb3s9TIdfntlsaH7pU4oPXZuc8'})
    return this.http.get(url, {headers});
    }
    getArtistas(termino: string){
      console.log(termino);
    return this.getQuery(`search?q=${termino}&type=artist&limit=6`)
    .pipe( map ( (data:any) => (data.artists.items )));
    }
    getArtista(id: string){
      return this.getQuery(`artists/${id}`);
      }
      getTopTracks ( id:string){
      return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map ( (data:any) => data['tracks']));
      }

}
