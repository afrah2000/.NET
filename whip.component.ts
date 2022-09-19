import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/cup.json';
@Component({
  selector: 'app-collections',
  templateUrl: './whip.component.html',
  styleUrls: ['./whip.component.css']
})
export class WhipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

productdetails=false;
showproductDetailsToggle(){
  this.productdetails=!this.productdetails;
}
toggleContent(){
  var content='';
  if(this.productdetails){
    content='fa-solid fa-arrow-down';
  }
  else{
    content='fa-solid fa-arrow-up';
  }
  return content;
}

product:any = (productdetails as any).default;
}
