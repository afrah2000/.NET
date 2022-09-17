import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/product.json';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

productdetails=false;
showproductDetailsToggle(){
  this.productdetails=!this.productdetails;
}
toggleContent(){
  var content='fghh';
  if(this.productdetails){
    content='fa fa-plus';
  }
  else{
    content='fa faminus';
  }
  return content;
}


product:any = (productdetails as any).default;
}
