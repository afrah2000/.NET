import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { RevComponent } from './rev/rev.component';
import { WhipComponent } from './whip/whip.component';
import { SearchComponent } from './search/search.component';
import { CollectionsComponent } from './collections/collections.component';
import { PastryComponent } from './pastry/pastry.component';
 
 
//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'',component:RevComponent},
  {path:'rev',component:RevComponent},
  {path:'',component:WhipComponent},
  {path:'whip',component:WhipComponent},
  {path:'',component:SearchComponent},
  {path:'search',component:SearchComponent},
  {path:'collections',component:CollectionsComponent},
  {path:'pastry',component:PastryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }