import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = 'http://192.168.30.20/';


  constructor(private httpC: HttpClient) { }

  getUsers() : Observable <{}>{
    return this.httpC.get(this.baseURL+'api/Actor?actorType=Agriculteur');
  };

  checkConnection(users : {}) : Observable <{}> {

    return this.httpC.post(this.baseURL+'api/Authentication', users);

  };

  testAPI() : Observable<any> {
    return this.httpC.get("http://192.168.30.20/api/Authentication/test");
  };
};

