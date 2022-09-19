import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/pastry.json';
@Component({
  selector: 'app-collections',
  templateUrl: './pastry.component.html',
  styleUrls: ['./pastry.component.css']
})
export class PastryComponent implements OnInit {

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
