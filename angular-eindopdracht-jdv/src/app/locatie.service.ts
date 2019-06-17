import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocatieObject } from '../classes/locatie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocatieService {

  private locatiesUrl = "https://datatank.stad.gent/4/cultuursportvrijetijd/buurtsportlocaties.json";

  constructor(private http: HttpClient) { }

  public getLocaties():Observable<LocatieObject> {
    return this.http.get<LocatieObject>(this.locatiesUrl);
  }

}

  


