import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterComponent } from '../components/register/register.component';
import { LoginModel } from '../models/loginModel';
import { ObjectResponseModel } from '../models/objectResponseModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44366/api/auth/"
  constructor(private httpClient:HttpClient, private localStorage:LocalStorageService) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<ObjectResponseModel<TokenModel>>(this.apiUrl+"login", loginModel)
  }

  register(registerModel:RegisterModel){
    return this.httpClient.post<ObjectResponseModel<TokenModel>>(this.apiUrl+"register", registerModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
