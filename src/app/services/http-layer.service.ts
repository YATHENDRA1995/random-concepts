import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLayerService {

  public headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(
    public http: HttpClient
  ) { }

  get(url: string): Observable<any> {
    try {
      return this.http.get(url);
    } catch (error) {
      console.log(error);
    }
  }

  post(url: string, body, headerOptions): Observable<any> {
    try {
      return this.http.post(url, body, headerOptions);
    } catch (error) {
      console.log(error);
    }
  }

}
