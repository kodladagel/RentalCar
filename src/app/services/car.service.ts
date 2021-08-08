import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44366/api/";

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {

    let newPath = this.apiUrl + "cars/getcardetailsbybrand?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {

    let newPath = this.apiUrl + "cars/getcardetailsbycolor?colorid=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(carId: number): Observable<ObjectResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycar?carid=' + carId;
    return this.httpClient.get<ObjectResponseModel<Car>>(newPath);
  }

  getCarsByColorAndBrand(colorId: number, brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolorandbrand?colorId=' + colorId + '&brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  addCar(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl+"cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  updateCar(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl+ "cars/update";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

}
