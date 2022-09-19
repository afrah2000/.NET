import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excellent/good/poor';
  course='angular';
   

  fullName: string = "Flavours";    
   
goBack():void{}
}
