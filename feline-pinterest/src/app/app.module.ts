import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MainPageComponent} from './pages/main-page/main-page.component';
import {FavoritePageComponent} from './pages/favorite-page/favorite-page.component';
import {HttpClientModule} from "@angular/common/http";
import {MainComponent} from "./components/main/main.component";
import {HeaderComponent} from "./components/header/header/header.component";
import {FavouriteComponent} from "./components/main/favourite/favourite.component";
import {CardComponent} from "./components/main/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FavoritePageComponent,
    HeaderComponent,
    FavouriteComponent,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
