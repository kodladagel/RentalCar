import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectResponseModel } from '../models/objectResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44366/api/users/"

  constructor(private httpClient:HttpClient) { }

  getByEmail(email:string):Observable<ObjectResponseModel<User>>{
    let newPath = this.apiUrl + "getbyemail?email="+email
    return this.httpClient.get<ObjectResponseModel<User>>(newPath)
  }

}
