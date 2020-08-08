import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Grade } from '../models/grade';
import { Sexe } from '../models/sexe';
import { DataTablesResponse } from '../models/data-tables-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private getURL = this.config.REST_API_SERVER + '/adherents'; 
  private getURL_sexe = this.config.REST_API_SERVER + '/sexes';

  constructor(private httpClient: HttpClient, private config: ConfigService) { }

  getAllGrade(): Observable<Grade[]> {
    return this.httpClient.get<DataTablesResponse>(this.getURL, this.config.httpOptions).pipe(
      map(response => response.data));
  }
  getByIdGrade(id: number): Observable<any> {
    const urlId = this.getURL+'/'+id;
    return this.httpClient.get<DataTablesResponse>(urlId, this.config.httpOptions).pipe(
      map(response => response.data));
  }
  addGrade(grades: Grade): Observable<Grade> {
    return this.httpClient.post<Grade>(this.getURL, grades, this.config.httpOptions);
   }
  updateGrade(id: number, grades: Grade): Observable<Grade> {
    const urlId = this.getURL+'/'+id;
    return this.httpClient.put<Grade>(urlId, grades, this.config.httpOptions);
  }
  deleteGrade(id: number): Observable<Grade> {
    const urlId = this.getURL+'/'+id;
    return this.httpClient.delete<Grade>(urlId, this.config.httpOptions);
  }
  getsexes(): Observable<Sexe[]> {
    return this.httpClient.get<DataTablesResponse>(this.getURL_sexe, this.config.httpOptions).pipe(
      map(response => response.data));
  }
}
