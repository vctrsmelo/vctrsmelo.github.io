import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Use the standard assets path
  private dataUrl = 'assets/data.json';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.dataUrl);
  }
}