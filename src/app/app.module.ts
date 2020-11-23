import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CodingComponent } from './components/pages/coding/coding.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './components/layout/nav/nav.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { SnakeComponent } from './components/games/snake/snake.component';
import { PacManComponent } from './components/games/pac-man/pac-man.component';
import { StoreModule } from '@ngrx/store';
import { HeroesComponent } from './components/games/heroes/heroes.component';
import { HeroesDetailComponent } from './components/games/heroes-detail/heroes-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroesDashboardComponent } from './components/games/heroes-dashboard/heroes-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CodingComponent,
    PageNotFoundComponent,
    NavComponent,
    SnakeComponent,
    PacManComponent,
    HeroesComponent,
    HeroesDetailComponent,
    MessagesComponent,
    HeroesDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
