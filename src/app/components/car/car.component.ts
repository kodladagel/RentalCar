import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  currentCar: Car;

  brands: Brand[];
  colors: Color[];

  filterText: string = "";

  brandId : number = 0;
  colorId : number = 0;

  basePath = "https://localhost:44366/"

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getAllBrands();
    this.getAllColors();
    
    this.activatedRoute.params.subscribe(params => {
      
      //ana sayfadadaki aramalarda çalışacak
      if (params["colorId"] && params["brandId"]) {

        if (params["colorId"] == 0 && params["brandId"] == 0){
          this.getCars()
        } 
        else if (params["colorId"] == 0 && params["brandId"] != 0){
          this.getCarsByBrand(params["brandId"]);
        }
        else if (params["colorId"] != 0 && params["brandId"] == 0){
          this.getCarsByColor(params["colorId"])
        }
        else if (params["colorId"] != 0 && params["brandId"] != 0){
          this.getCarsByColorAndBrand(params["colorId"], params["brandId"])
        }
      }

      //soldan renk ararken çalışacak
      else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"])
      }

      //soldan marka ararken çalışacak
      else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }

      // ilk açılışta ve temizle düğmesiyle çalışacak
      else {
        this.getCars();
      }

    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;
    });
  }

  getCarsByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarsByColorAndBrand(colorId, brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data;
    });
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  getAllColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  getPath() {
    return this.basePath
  }

  setCurrentCar(car: Car) {
    this.currentCar = car
  }

}


