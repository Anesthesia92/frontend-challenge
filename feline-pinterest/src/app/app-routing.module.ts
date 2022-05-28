import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from "./main/favourite/favourite.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";

const routes: Routes = [
  { path: 'main', component: MainPageComponent},
  { path: 'favourite', component: FavouriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
