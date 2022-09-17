import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-cards',
templateUrl: './cards.component.html',
styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
constructor() { } 
mycolor="black";
productDetails= [
{ "pid":1,
"pname":"Mousse",
"pdescription":"Chocolate, cream, sugar, eggs and butter",
"status":"Instock",
"image": "/assets/mousse.jpg" },

{"pid":2,
"pname":"Fruitpie",
"pdescription":"Whole or sliced fruits is combined with sugar and a starch thickener",

"status":"Out of Stock",
"image": "/assets/fruitpie.jpg" },
{"pid":3,
"pname":"Apple pie",
"pdescription":"Jonagold, Honeycrisp, Braeburn, Mutsu, Winesap,cream Lady (Crispy brown) ",
"status":"Instock",
"image": "/assets/apple.jpg" },
{"pid":4,
"pname":"Cheese cake",
"pdescription":"tree nuts (walnuts), sugar, milk, wheat, butter,honey,peanuts may be present",
"status":"Instock",
"image":"/assets/cheese.jpg"
},
{"pid":5,
"pname":"Cherry",
"pdescription":" These are made w both fruit & an infusion of the pips",

"status":"Instock",
"image": "/assets/cherry.jpg" },

{"pid":6,
"pname":"Cheese with venilla",
"pdescription":"Tree nuts (walnuts), sugar, milk, wheat, butter,honey, eggs and trace amount vanilla and peanuts may be present",
"status":"Out of Stock",
"image":"/assets/cheese.jpg"
},

{"pid":7,
"pname":"Caramel",
"pdescription":"Sugar that has been cooked until it browns",
"status":"Instock",
"image": "/assets/caramel.jpg" },
{"pid":8,
"pname":"Plum",
"pdescription":"Dried fruit (such as currants, raisins, or prunes) or with fresh fruit",
"status":"Instock",
"image": "/assets/plum.jpg" },
{"pid":9,
"pname":"Cheese brownie",
"pdescription":"Taste divine, and are plain addictive and bursting in chocolate flavour",
"status":"Out of Stock",
"image": "/assets/almond.jpg" },

]
ngOnInit(): void {
}

}