import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BrandService {
  constructor(private http: HttpClient) {}

  public getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }
}
