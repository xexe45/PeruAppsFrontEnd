
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { UserInterface } from '../interfaces/UserInterface.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  list(page: number = 1){

    return this.http.get(`${environment.api_url}?page=${page}`);

  }

  show( id: number ) {
    return this.http.get(`${environment.api_url}/${id}`);
  }

  store( user: UserInterface ){

    return this.http.post(environment.api_url, user);

  }

  update( id: number, user: UserInterface) {

    return this.http.put(`${environment.api_url}/${id}`, user);

  }



}
