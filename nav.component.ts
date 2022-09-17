import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-nav',
templateUrl: './nav.component.html',
styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
constructor() { }
//STRING INTERPOLATION
title = 'Cₐₖₑfᵢzz';
//PROPERTY BINDING
public logo="/assets/bk.png";

//EVENT BINDING
onSearch()
{
alert("Will contact shortly");
}

//Accessing the Search Component
//Property
productentered: string=' '  
//Event
search_product(product_name:string):void{ //Laptop
if(!product_name)
{
this.productentered=' ';
}
this.productentered=product_name; //Laptop
console.log(product_name)
}
ngOnInit(): void {
}
}