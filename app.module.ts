import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { RevComponent } from './rev/rev.component';
import { WhipComponent } from './whip/whip.component';
import { SearchComponent } from './search/search.component';
import { CollectionsComponent } from './collections/collections.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AdsComponent } from './ads/ads.component';
import { PastryaddComponent } from './pastryadd/pastryadd.component';
import { PastryComponent } from './pastry/pastry.component';
import { CupcakesComponent } from './cupcakes/cupcakes.component';
 
@NgModule({
  declarations: [
    
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    RevComponent,
    WhipComponent,
    SearchComponent,
    CollectionsComponent,
    CounterComponent,
    CounterchildComponent,
    AdvertisementComponent,
    AdsComponent,
    PastryaddComponent,
    PastryComponent,
    CupcakesComponent,
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }