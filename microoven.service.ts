import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//access microoven.ts
import { Microoven } from './microoven';
@Injectable({
  providedIn: 'root'
})
export class MicroovenService {

  constructor() { }
  micro: Microoven[] = [
    {
      "pid":1,
        "pname":"Black current",
        "pdescription":"super light kirschwasser",
        "price": 800,
      contact:990065427, 
      img: 'https://images.pexels.com/photos/5803197/pexels-photo-5803197.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      "pid":2,
        "pname":"Oreo",
        "pdescription":"oreo soaked with kirschwasser",
        "price": 900,
      contact:990065427, 
      img: 'https://images.pexels.com/photos/8976294/pexels-photo-8976294.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      pid: 3,
      "pname":"chocolate",
      "pdescription":"super light chocolate sponge kirschwasser",
      "price": 800,
      contact:990065427, 
      img: 'https://images.pexels.com/photos/5847926/pexels-photo-5847926.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      pid: 4,
      "pname":"Fruity",
      "pdescription":"fruit chocolate sponge kirschwasser",
      price: 200,
      contact:990065407, 
      img: 'https://images.pexels.com/photos/3674/restaurant-dessert-pudding-strawberries.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      pid: 5,
      "pname":"cherry",
      "pdescription":"cherry chocolate sponge kirschwasser",
      price: 400,
      contact:990060427, 
      img: 'https://images.pexels.com/photos/6210804/pexels-photo-6210804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408'
    },
    {
      pid: 6,
      "pname":"strawberry",
      "pdescription":"super light chocolate strawberry",
      price: 600,
      contact:997765427, 
      img: 'https://media.istockphoto.com/photos/homemade-strawberry-mousse-picture-id1298293237?b=1&k=20&m=1298293237&s=612x612&w=0&h=whzGr16rioOzAF2x654VGq2__oV8IeErj-5YakLR6F8='
    },
    {
      pid: 6,
      "pname":"coffee",
      "pdescription":"super light piece",
      price: 400,
      contact:997765427, 
      img: 'https://images.pexels.com/photos/8336184/pexels-photo-8336184.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      pid: 7,
      "pname":"sponge",
      "pdescription":"super light chocolate sponge pudding",
      price: 500,
      contact:997765427, 
      img: 'https://images.pexels.com/photos/8745313/pexels-photo-8745313.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      pid: 8,
      "pname":"venilla",
      "pdescription":"super light venilla sponge kirschwasser",
      price: 600,
      contact:997765427, 
      img: 'https://images.pexels.com/photos/7783242/pexels-photo-7783242.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      pid: 9,
      "pname":"strawberry",
      "pdescription":"super light strawberry sponge kirschwasser",
      price: 200,
      contact:997765427, 
      img: 'https://media.istockphoto.com/photos/delicious-strawberry-mousse-in-glass-goblet-picture-id1331484373?b=1&k=20&m=1331484373&s=612x612&w=0&h=7DePNLuPaCGhK3g-ktVkxrKNOVX0Cgs2BewnJBvXf1U='
    }
  ];

  public getMicroOvenDetails(): any {
    const microObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.micro);
      }, 1000);
    });
    return microObservable;
  }
}