import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public REST_API_SERVER = 'http://localhost:8000/api';

  public httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': 'Bearer my-token',
      'My-Custom-Header': 'foobar',
      'enctype': 'multipart/form-data'
    })
  };
  constructor() { }
}
