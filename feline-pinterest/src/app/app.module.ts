import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header/header.component';
import {MainComponent} from './main/main.component';
import {CardComponent} from './main/card/card.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FavouriteComponent} from './main/favourite/favourite.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardComponent,
    FavouriteComponent,
    MainPageComponent,
    FavoritePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
