import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService<T> {

  constructor(@Inject(String) private apiUrl:string , private http: HttpClient) { }

  getv():Observable<T> {
    return this.http.get<T>(this.apiUrl)
  }
  getById(id):Observable<T>{
    return this.http.get<T>(this.apiUrl+`/${id}`)
  }
  postv(emp):Observable<T> {
    return this.http.post<T>(this.apiUrl, emp);
  }
  editv(id,emp):Observable<T>{
    return this.http.put<T>(this.apiUrl+`/${id}`,emp)
  }
  deletev(id):Observable<T>{
    return this.http.delete<T>(this.apiUrl+`/${id}`) 
  }
}
