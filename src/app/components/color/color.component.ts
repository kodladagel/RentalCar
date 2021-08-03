import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = [];
  currentColor:Color = {colorId:0, name:""};
  filterText:string="";

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  setDefaultColor(){
    this.currentColor = {colorId:0, name:""};
  }

  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return "list-group-item list-group-item-primary"
    } else {
      return "list-group-item"
    }
  }

  /* getAllColorClass(){
    if (!this.currentColor) {
      return "list-group-item list-group-item-action active";
    }else{
      return "list-group-item list-group-item-action";
    }
  } */

}
