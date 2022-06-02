import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { FavouriteComponent } from "./components/main/favourite/favourite.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'favourite', component: FavouriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
